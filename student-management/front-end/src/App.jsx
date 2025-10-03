import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./UI/layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Layout />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
