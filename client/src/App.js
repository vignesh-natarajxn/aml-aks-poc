import logo from "./logo.svg";
import "./App.css";
import BasicForm from "./components/BasicForm";

function App() {
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
      <BasicForm />
    </div>
  );
}

export default App;
