import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
export default function Navbar() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-16 bg-stone-100 px-4 py-4 flex justify-between items-center">
      <div className="text-4xl font-serif text-yellow-800 italic ml-12">
        Angel
      </div>

      <div className="space-x-2">
        <Button
          variant="outline"
          size="lg"
          className="dark:text-black"
          onClick={() => {
            navigate("/home/student");
          }}
        >
          Student
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            navigate("/home/score");
          }}
        >
          Score
        </Button>
      </div>

      <div className="flex items-center space-x-8 group mr-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer text-yellow-500 hover:text-orange-400"
          onClick={() => {
            const newTheme = theme === "light" ? "dark" : "light";
            setTheme(newTheme);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>

        <Avatar className="w-10 h-10">
          <AvatarImage src="/avatar.jpg" alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
