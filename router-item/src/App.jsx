import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

import User from "./components/User.jsx";
import Username from "./components/Username.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/user" element={<User />}>
          <Route path=":username" element={<Username />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
