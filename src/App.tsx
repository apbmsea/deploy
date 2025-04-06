import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Order from "./pages/Order";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/order" element={<Order />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
