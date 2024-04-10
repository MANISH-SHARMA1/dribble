import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import CreateProfile from "./pages/CreateProfile";
import Inquiry from "./component/Inquiry";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/createProfile/:id" element={<CreateProfile />} />
        <Route path="/inquiry/:id" element={<Inquiry />} />
      </Routes>
    </div>
  );
}

export default App;
