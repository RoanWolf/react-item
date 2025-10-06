import { useTheme } from "@/components/theme-provider";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div
      onClick={toggleTheme}
      className="w-8 h-8 cursor-pointer text-yellow-500 hover:text-orange-400 transition-all duration-300 "
     
    >
      {theme === "light" ? (
        // ☀️ 太阳图标
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ) : (
        // 🌙 月亮图标
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0 1 12.002 21c-5.385 0-9.75-4.365-9.75-9.75a9.718 9.718 0 0 1 5.998-9.25 9.75 9.75 0 1 0 13.502 13.002Z"
          />
        </svg>
      )}
    </div>
  );
}
