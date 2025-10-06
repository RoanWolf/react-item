import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";

import Home from "./UI/Home";
import StudentList from "./features/student/StudentList";
import ScoreList from "./features/score/ScoreList";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/home/student" />} />

          <Route path="home" element={<Home />}>
            <Route path="student" element={<StudentList />} />
            <Route path="score" element={<ScoreList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
