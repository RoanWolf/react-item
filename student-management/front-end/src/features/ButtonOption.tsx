import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useNavigate, useLocation } from "react-router-dom";

export default function ButtonOption() {
  const navigate = useNavigate();
  const location = useLocation();
  const isStudent = location.pathname === "/home/student";

  return (
    <ButtonGroup>
      <Button
        size="lg"
        variant={isStudent ? "default" : "outline"}
        className={isStudent ? "dark:text-[#e67700]" : "dark:text-white"}
        onClick={() => navigate("/home/student")}
      >
        Student
      </Button>

      <Button
        size="lg"
        variant={!isStudent ? "default" : "outline"}
        className={!isStudent ? "dark:text-[#e67700]" : "dark:text-white"}
        onClick={() => navigate("/home/score")}
      >
        Score
      </Button>
    </ButtonGroup>
  );
}
