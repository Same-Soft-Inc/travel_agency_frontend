"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export function EmployeesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={employee.avatar} alt={employee.name} />
                    <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{employee.name}</div>
                    <div className="text-sm text-muted-foreground">{employee.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <Badge variant={employee.status === "Active" ? "success" : "outline"}>{employee.status}</Badge>
              </TableCell>
              <TableCell>{employee.joinedDate}</TableCell>
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
                    <DropdownMenuItem>View profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit employee</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Manage leave</DropdownMenuItem>
                    <DropdownMenuItem>View payroll</DropdownMenuItem>
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

const employees = [
  {
    id: "E-1001",
    name: "Mohamed Ahmed",
    email: "mohamed.ahmed@samesoft.com",
    position: "Travel Consultant",
    department: "Sales",
    status: "Active",
    joinedDate: "2020-03-15",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1002",
    name: "Amina Hassan",
    email: "amina.hassan@samesoft.com",
    position: "Visa Specialist",
    department: "Visa Processing",
    status: "Active",
    joinedDate: "2019-06-22",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1003",
    name: "Abdikarim Farah",
    email: "abdikarim.farah@samesoft.com",
    position: "Accountant",
    department: "Finance",
    status: "Active",
    joinedDate: "2021-01-10",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1004",
    name: "Hodan Ali",
    email: "hodan.ali@samesoft.com",
    position: "HR Manager",
    department: "Human Resources",
    status: "Active",
    joinedDate: "2018-09-05",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1005",
    name: "Yusuf Ibrahim",
    email: "yusuf.ibrahim@samesoft.com",
    position: "Marketing Specialist",
    department: "Marketing",
    status: "On Leave",
    joinedDate: "2020-10-18",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1006",
    name: "Fartun Omar",
    email: "fartun.omar@samesoft.com",
    position: "Customer Support",
    department: "Customer Service",
    status: "Active",
    joinedDate: "2022-02-12",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1007",
    name: "Abdirahman Jama",
    email: "abdirahman.jama@samesoft.com",
    position: "IT Specialist",
    department: "IT",
    status: "Active",
    joinedDate: "2021-07-20",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1008",
    name: "Sahra Mohamed",
    email: "sahra.mohamed@samesoft.com",
    position: "Operations Manager",
    department: "Operations",
    status: "Active",
    joinedDate: "2019-11-08",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1009",
    name: "Hassan Abdi",
    email: "hassan.abdi@samesoft.com",
    position: "Tour Guide",
    department: "Operations",
    status: "On Leave",
    joinedDate: "2020-05-15",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1010",
    name: "Asha Nur",
    email: "asha.nur@samesoft.com",
    position: "Travel Consultant",
    department: "Sales",
    status: "Active",
    joinedDate: "2021-03-22",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

