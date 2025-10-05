import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";

import Home from "./UI/Home";
export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/home/student" />} />

          <Route path="home" element={<Home />}>
            <Route path="student" element={<div />} />
            <Route path="score" element={<div />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
