"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

interface TransactionsTableProps {
  limit?: number
}

export function TransactionsTable({ limit }: TransactionsTableProps) {
  const displayTransactions = limit ? transactions.slice(0, limit) : transactions

  return (
    <div className="rounded-md border overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Transaction ID</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell className="hidden md:table-cell">{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>
                <Badge variant={transaction.type === "income" ? "success" : "destructive"}>{transaction.type}</Badge>
              </TableCell>
              <TableCell className={transaction.type === "income" ? "text-green-600" : "text-red-600"}>
                {transaction.type === "income" ? "+" : "-"}
                {transaction.amount}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete transaction</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const transactions = [
  {
    id: "T-1001",
    date: "2023-06-15",
    description: "Flight booking - John Smith",
    type: "income",
    amount: "$1,999.00",
  },
  {
    id: "T-1002",
    date: "2023-06-16",
    description: "Office rent payment",
    type: "expense",
    amount: "$2,500.00",
  },
  {
    id: "T-1003",
    date: "2023-06-18",
    description: "Hotel booking - Sarah Johnson",
    type: "income",
    amount: "$899.00",
  },
  {
    id: "T-1004",
    date: "2023-06-20",
    description: "Staff salary payments",
    type: "expense",
    amount: "$8,500.00",
  },
  {
    id: "T-1005",
    date: "2023-06-22",
    description: "Visa processing fee - Michael Brown",
    type: "income",
    amount: "$250.00",
  },
  {
    id: "T-1006",
    date: "2023-06-25",
    description: "Utility bills payment",
    type: "expense",
    amount: "$450.00",
  },
  {
    id: "T-1007",
    date: "2023-06-28",
    description: "Tour package - David Wilson",
    type: "income",
    amount: "$3,299.00",
  },
  {
    id: "T-1008",
    date: "2023-06-30",
    description: "Marketing expenses",
    type: "expense",
    amount: "$1,200.00",
  },
  {
    id: "T-1009",
    date: "2023-07-02",
    description: "Insurance payment",
    type: "expense",
    amount: "$750.00",
  },
  {
    id: "T-1010",
    date: "2023-07-05",
    description: "Cruise booking - Jennifer Lee",
    type: "income",
    amount: "$2,799.00",
  },
]

