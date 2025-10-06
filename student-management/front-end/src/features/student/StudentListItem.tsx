import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
export default function StudentListItem() {
  return (
    <TableRow key={new Date().toString()}>
      <TableCell>{new Date().toString()}</TableCell>
      <TableCell className="flex items-center space-x-3">
        <div>
          <img
            className="h-12 w-12 rounded-xl"
            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
        <div>
          <div className="font-bold">Hart Hagerty</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </TableCell>

      <TableCell>
        <div>Class 2 | Year 6</div>
        <span className="bg-[#e9ecef] px-2 py-1 rounded-xl text-sm inline-block mt-1 dark:bg-[#212529]">
          Rowan
        </span>
      </TableCell>
      <TableCell className="text-right align-middle">
        <div className="inline-flex gap-2">
          <Button variant="outline">details</Button>
          <Button variant="destructive">delete</Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
