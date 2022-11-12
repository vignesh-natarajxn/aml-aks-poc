
import argparse
import os
import numpy as np
import pandas as pd
import glob

from azureml.core import Run
# from utils import load_data

import joblib

from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import cross_val_score

# let user feed in 2 parameters, the dataset to mount or download, and the regularization rate of the logistic regression model
parser = argparse.ArgumentParser()
parser.add_argument('--data-folder', type=str, dest='data_folder', help='data folder mounting point')
parser.add_argument('--max-depth', type=int, dest='max_depth', default=5, help='max depth')
args = parser.parse_args()

###
data_folder = os.path.join(args.data_folder, 'jobsdata')
print('Data folder:', data_folder)

job_data = pd.read_csv(os.path.join(data_folder, 'jobs.csv'))

                        
X = job_data.drop(columns =["quality"])
y = job_data["quality"]

clf = DecisionTreeRegressor(random_state=0,max_depth = args.max_depth)
rmse= np.mean(np.sqrt(-cross_val_score(clf, X, y, scoring="neg_mean_squared_error", cv = 5)))
print('RMSE is', rmse)

# Get the experiment run context
run = Run.get_context()

run.log('max depth', np.float(args.max_depth))
run.log('rmse', np.float(rmse))

os.makedirs('outputs', exist_ok=True)

clf.fit(X,y)
# file saved in the outputs folder is automatically uploaded into experiment record
joblib.dump(value=clf, filename='outputs/job_model.pkl')

run.complete()
