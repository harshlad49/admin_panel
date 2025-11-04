import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Service } from "./Pages/Service";
import { Contact } from "./Pages/Contact";
import { Navbar } from "./components/Navbar";
import { Error } from "./Pages/Error";
import { Logout } from "./Pages/Logout";
const App = () => {
 
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
