"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus, Search } from "lucide-react"
import Link from "next/link"

export default function EmployeeListPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Employee List</h1>
        <Button asChild>
          <Link href="/hrm/new-employee">
            <Plus className="mr-2 h-4 w-4" /> New Employee
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription>Manage your company employees and their information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search employees..." />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <Button variant="outline" size="sm">
                Filter
              </Button>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
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
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.position}</TableCell>
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
        </CardContent>
      </Card>
    </div>
  )
}

const employees = [
  {
    id: "E-1001",
    name: "John Smith",
    email: "john.smith@safari.com",
    position: "Travel Consultant",
    department: "Sales",
    status: "Active",
    joinedDate: "2020-03-15",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1002",
    name: "Sarah Johnson",
    email: "sarah.johnson@safari.com",
    position: "Visa Specialist",
    department: "Visa Processing",
    status: "Active",
    joinedDate: "2019-06-22",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1003",
    name: "Michael Brown",
    email: "michael.brown@safari.com",
    position: "Accountant",
    department: "Finance",
    status: "Active",
    joinedDate: "2021-01-10",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1004",
    name: "Emily Davis",
    email: "emily.davis@safari.com",
    position: "HR Manager",
    department: "Human Resources",
    status: "Active",
    joinedDate: "2018-09-05",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "E-1005",
    name: "David Wilson",
    email: "david.wilson@safari.com",
    position: "Marketing Specialist",
    department: "Marketing",
    status: "On Leave",
    joinedDate: "2020-10-18",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

