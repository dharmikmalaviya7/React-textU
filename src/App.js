import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been Enabled", "success");
      // document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Utils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* <Route path="/">
              <Route
                path="messages"
                element={<DashboardMessages />}
              />
              <Route path="tasks" element={<DashboardTasks />} />
            </Route> */}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
            } />
          </Routes>
          {/* <About mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
