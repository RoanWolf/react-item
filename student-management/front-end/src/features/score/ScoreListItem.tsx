import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
export default function scoreListItem() {
  return (
    <TableRow key={1}>
      <TableCell>Angel</TableCell>
      <TableCell>Class 1 | Year 8</TableCell>
      <TableCell>Math</TableCell>
      <TableCell>2025 fall</TableCell>
      <TableCell>150</TableCell>
      <TableCell className="text-right align-middle">
        <div className="inline-flex gap-2 mr-3">
          <Button variant="outline">details</Button>
          <Button variant="destructive">delete</Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
