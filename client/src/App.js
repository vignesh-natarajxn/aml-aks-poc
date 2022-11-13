import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BasicForm from "./components/BasicForm";

function App() {
  const [finalValue, setFinalValue] = useState(99);

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
      {finalValue != 99 && (
        <h2 style={{ color: "white" }}>Wine Quality: {finalValue}</h2>
      )}
      {finalValue == 99 && (
        <div
          style={{
            color: "grey",
            marginTop: "10px",
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          In order to use this website, CORS needs to be disabled and HTTP-HTTPS
          requests needs to be enabled ('Allow' Insecure Content) on the
          browser.
        </div>
      )}
    </div>
  );
}

export default App;
