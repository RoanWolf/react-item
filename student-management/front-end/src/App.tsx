import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";

import Home from "./UI/Home";
import StudentList from "./features/student/StudentList";
import ScoreList from "./features/score/ScoreList";
import ErrorMessage from "./UI/ErrorMessage";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";

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
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
