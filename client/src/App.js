import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BasicForm from "./components/BasicForm";

function App() {
  const [finalValue, setFinalValue] = useState(9);

  const predictedValue = (val) => {
    setFinalValue(val);
  };

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Wine Quality Predictor</h1>
      <h3 style={{ color: "white" }}>
        An{" "}
        <div style={{ color: "rgb(255, 187, 0)", display: "inline" }}>
          {" "}
          Azure Machine Learning{" "}
        </div>{" "}
        Application<div></div>deployed using{" "}
        <div style={{ color: "rgb(255, 187, 0)", display: "inline" }}>
          {" "}
          Azure Kubernetes Service{" "}
        </div>
      </h3>
      <BasicForm predictedValue={predictedValue} />
      {finalValue != 9 && (
        <h2 style={{ color: "white" }}>Wine Quality: {finalValue}</h2>
      )}
    </div>
  );
}

export default App;
