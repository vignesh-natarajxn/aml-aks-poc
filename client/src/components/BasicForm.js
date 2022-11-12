import { useState } from "react";
import "./BasicForm.css";

const BasicForm = () => {
  const [input, setInput] = useState({
    fa: "",
    va: "",
    ca: "",
    rs: "",
    cl: "",
    fs: "",
    ts: "",
    de: "",
    ph: "",
    su: "",
    al: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="base">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-div">
          <label htmlFor="fa">Fixed Acidity: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.fa}
            onChange={handleInput}
            name="fa"
            id="fa"
          />
        </div>
        <div className="form-div">
          <label htmlFor="va">Volatile Acidity: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.va}
            onChange={handleInput}
            name="va"
            id="va"
          />
        </div>
        <div className="form-div">
          <label htmlFor="ca">Citric Acid: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.ca}
            onChange={handleInput}
            name="ca"
            id="ca"
          />
        </div>
        <div className="form-div">
          <label htmlFor="rs">Residual Sugar: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.rs}
            onChange={handleInput}
            name="rs"
            id="rs"
          />
        </div>
        <div className="form-div">
          <label htmlFor="cl">Chlorides: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.cl}
            onChange={handleInput}
            name="cl"
            id="cl"
          />
        </div>
        <div className="form-div">
          <label htmlFor="fs">Free Sulfur Dioxide: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.fs}
            onChange={handleInput}
            name="fs"
            id="fs"
          />
        </div>
        <div className="form-div">
          <label htmlFor="ts">Total Sulfur Dioxide: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.ts}
            onChange={handleInput}
            name="ts"
            id="ts"
          />
        </div>
        <div className="form-div">
          <label htmlFor="de">Density: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.de}
            onChange={handleInput}
            name="de"
            id="de"
          />
        </div>
        <div className="form-div">
          <label htmlFor="ph">pH: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.ph}
            onChange={handleInput}
            name="ph"
            id="ph"
          />
        </div>
        <div className="form-div">
          <label htmlFor="su">Sulphates: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.su}
            onChange={handleInput}
            name="su"
            id="su"
          />
        </div>
        <div className="form-div">
          <label htmlFor="al">Alcohol: </label>
          <input
            className="form-input"
            type="number"
            autoComplete="off"
            value={input.al}
            onChange={handleInput}
            name="al"
            id="al"
          />
        </div>
      </form>
      <button type="submit" className='button'>Predict Quality</button>
    </div>
  );
};

export default BasicForm;
