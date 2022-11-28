import { Routes, Route } from "react-router-dom";
import Practice from "./Practice";
import Earth from "./Earth";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/wobble" element={<Practice />} />
      <Route path="/earth" element={<Earth />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
