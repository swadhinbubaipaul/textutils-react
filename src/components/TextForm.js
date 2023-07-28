import { useState } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    showAlert("Text cleared!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to Clipboard!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleRemoveExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    showAlert("Extra spaces removed!", "success");
  };

  return (
    <>
      <div className="container" data-bs-theme={mode}>
        <h2 style={{ textAlign: "center" }} className="py-4 pt-0">
          Text Analysis and Converter
        </h2>
        <div className="mb-3">
          <h3 className={`text-${mode === "light" ? "dark" : "light"}`}>
            {heading}
          </h3>
          <textarea
            className={`form-control text-${
              mode === "light" ? "dark" : "light"
            }`}
            id="myBox"
            rows="6"
            onChange={handleOnChange}
            value={text}
            placeholder="Enter text here"
            style={{
              backgroundColor: mode === "dark" ? "rgb(53 58 77)" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleRemoveExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-danger mx-2 my-2"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-success  mx-2 my-2"
          onClick={handleCopyText}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
      </div>
      <div
        data-bs-theme={mode}
        className={`container my-3 text-${mode === "light" ? "dark" : "light"}`}
      >
        <h3 className="py-2">Text summary</h3>
        <p>
          Number of words:
          {text.split(" ").filter((element) => element.length !== 0).length}
        </p>
        <p>Number of characters: {text.length}</p>
        <p>
          Reading time(minutes):{" "}
          {text.split(" ").filter((element) => element.length !== 0).length *
            0.008}
        </p>
        <h2 className="py-2" style={{ textAlign: "center" }}>
          Preview Document
        </h2>
        <textarea
          className={`form-control text-${mode === "light" ? "dark" : "light"}`}
          id="preview"
          rows="6"
          value={text.length > 0 ? text : ""}
          readOnly
          style={{
            backgroundColor: mode === "dark" ? "rgb(53 58 77)" : "white",
          }}
          placeholder="Your preview will be shown here"
        ></textarea>
      </div>
    </>
  );
}
