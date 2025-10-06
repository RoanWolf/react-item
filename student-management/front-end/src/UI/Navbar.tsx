import AvatorDrop from "./AvatorDrop";
import ButtonOption from "../features/ButtonOption";
import ThemeButton from "../features/ThemeButton";
export default function Navbar() {
  return (
    <div className="h-16 bg-[#f8f9fa] px-4 py-4 flex justify-between items-center dark:bg-[#495057]">
      <div className="text-4xl font-serif text-yellow-800 italic ml-12 dark:text-yellow-300">
        Angel
      </div>

      <div className="space-x-2">
        <ButtonOption />
      </div>

      <div className="flex items-center space-x-8 group mr-3">
        <ThemeButton />
        <AvatorDrop />
      </div>
    </div>
  );
}
