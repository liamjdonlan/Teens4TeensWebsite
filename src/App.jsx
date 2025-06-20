// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import TakeAction from "./pages/TakeAction";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/take-action" element={<TakeAction />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
