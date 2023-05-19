import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>

          <Routes>
            <Route path="/signup" element={<SignUp />} />
          </Routes>

          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
