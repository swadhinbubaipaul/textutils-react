export default function About({ mode }) {
  let myStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "rgb(46, 50, 67)" : "white",
  };
  let myButtonStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "rgb(53 58 77)" : "white",
  };
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myButtonStyle}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> gives you a way to analyze your text
              quickly and efficently.It let you to count word, count charecters
              or reading time required.It has both light and dark mode for
              better compartable.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myButtonStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> is a free charecter counter tool that
              provided instant charecter count and word count statics for a
              given text. TextUtils reports the number of words and charecter.
              Thus it is suitable for writing text with word / charecter limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myButtonStyle}
            >
              Browser Compaitability
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> works in any web browser such as Chrome
              , Firefox ,Internet Explorer ,Safari,Opera etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
