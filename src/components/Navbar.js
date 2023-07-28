export default function Navbar({ title, mode, toggleMode }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggleMode}
          />
          <label
            className={`form-check-label text-${
              mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}
