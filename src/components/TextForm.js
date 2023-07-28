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
        <h2 style={{ textAlign: "center" }} className="py-4">
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
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger me-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-success" onClick={handleCopyText}>
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
          {text.trim().length === 0 ? 0 : text.trim().split(" ").length}
        </p>
        <p>Number of characters: {text.length}</p>
        <p>
          Reading time(minutes):{" "}
          {text.trim().length === 0 ? 0 : 0.008 * text.trim().split(" ").length}
        </p>
        <h2 className="py-2" style={{ textAlign: "center" }}>
          Preview Document
        </h2>
        <textarea
          className={`form-control text-${mode === "light" ? "dark" : "light"}`}
          id="preview"
          rows="6"
          value={text.length > 0 ? text : ""}
          placeholder="Enter something in the textbox to preview it here"
        ></textarea>
      </div>
    </>
  );
}
