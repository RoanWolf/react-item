import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./UI/layout";
import Avator from "./UI/Avator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
