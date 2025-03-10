"use client"

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
import { Check, MoreHorizontal, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BookingsTableProps {
  status?: "pending" | "confirmed" | "cancelled"
}

export function BookingsTable({ status }: BookingsTableProps) {
  const filteredBookings = status ? bookings.filter((booking) => booking.status === status) : bookings

  return (
    <div className="rounded-md border overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Booking ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden md:table-cell">Destination</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>{booking.customer}</TableCell>
              <TableCell className="hidden md:table-cell">{booking.destination}</TableCell>
              <TableCell className="hidden md:table-cell">{booking.date}</TableCell>
              <TableCell>{booking.amount}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    booking.status === "confirmed"
                      ? "success"
                      : booking.status === "pending"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {booking.status}
                </Badge>
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
                    <DropdownMenuItem>Edit booking</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Check className="mr-2 h-4 w-4" /> Confirm
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <X className="mr-2 h-4 w-4" /> Cancel
                    </DropdownMenuItem>
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

const bookings = [
  {
    id: "B-1001",
    customer: "Mohamed Ahmed",
    destination: "Dubai, UAE",
    date: "2023-06-15",
    amount: "$1,999.00",
    status: "confirmed",
  },
  {
    id: "B-1002",
    customer: "Amina Hassan",
    destination: "Paris, France",
    date: "2023-07-22",
    amount: "$2,499.00",
    status: "pending",
  },
  {
    id: "B-1003",
    customer: "Abdikarim Farah",
    destination: "Tokyo, Japan",
    date: "2023-08-10",
    amount: "$3,299.00",
    status: "confirmed",
  },
  {
    id: "B-1004",
    customer: "Hodan Ali",
    destination: "New York, USA",
    date: "2023-09-05",
    amount: "$1,899.00",
    status: "cancelled",
  },
  {
    id: "B-1005",
    customer: "Yusuf Ibrahim",
    destination: "Sydney, Australia",
    date: "2023-10-18",
    amount: "$2,799.00",
    status: "pending",
  },
  {
    id: "B-1006",
    customer: "Fartun Omar",
    destination: "Rome, Italy",
    date: "2023-11-12",
    amount: "$2,199.00",
    status: "confirmed",
  },
  {
    id: "B-1007",
    customer: "Abdirahman Jama",
    destination: "Bangkok, Thailand",
    date: "2023-12-20",
    amount: "$1,799.00",
    status: "pending",
  },
  {
    id: "B-1008",
    customer: "Sahra Mohamed",
    destination: "London, UK",
    date: "2024-01-08",
    amount: "$2,299.00",
    status: "confirmed",
  },
  {
    id: "B-1009",
    customer: "Hassan Abdi",
    destination: "Cairo, Egypt",
    date: "2024-02-15",
    amount: "$2,099.00",
    status: "cancelled",
  },
  {
    id: "B-1010",
    customer: "Asha Nur",
    destination: "Barcelona, Spain",
    date: "2024-03-22",
    amount: "$1,999.00",
    status: "pending",
  },
]

