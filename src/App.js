import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Form from "./Components/TextForm";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f2654";
      showAlert("Dark Mode has been enabled.", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled.", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  return (
    <>
<Router>
      <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" />
      <Alert alert={alert} />
      <div className="container mt-5">
      <Routes>
        <Route path="/About" element={<About mode={mode}/>}/>
        <Route path="/" element={<Form heading="Enter the Text here!" mode={mode} />} />
      </Routes>
      </div>
</Router>
    </>
  );
}

export default App;
