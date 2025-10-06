import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ScoreListItem from "./ScoreListItem";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
];

export default function ScoreList() {
  return (
    <Table className="w-[95%] m-auto mt-10 ">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Semester</TableHead>
          <TableHead>Score</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base">
        {invoices.map((invoice) => (
          <ScoreListItem />
        ))}
      </TableBody>
    </Table>
  );
}
