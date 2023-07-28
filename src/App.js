import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "rgb(46 50 67)";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "rgb(254 254 254)";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          mode={darkMode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
