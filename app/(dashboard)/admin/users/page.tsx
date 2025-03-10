"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, Key, MoreHorizontal, Plus, SearchIcon, Trash, UserCog } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface User {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
  lastLogin: string
  avatar: string
}

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const users: User[] = [
    {
      id: "U-1001",
      name: "John Smith",
      email: "john.smith@safari.com",
      role: "Administrator",
      status: "active",
      lastLogin: "2023-06-15 09:30 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "U-1002",
      name: "Sarah Johnson",
      email: "sarah.johnson@safari.com",
      role: "Manager",
      status: "active",
      lastLogin: "2023-06-14 02:15 PM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "U-1003",
      name: "Michael Brown",
      email: "michael.brown@safari.com",
      role: "Accountant",
      status: "active",
      lastLogin: "2023-06-15 11:45 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "U-1004",
      name: "Emily Davis",
      email: "emily.davis@safari.com",
      role: "HR Manager",
      status: "active",
      lastLogin: "2023-06-13 10:20 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "U-1005",
      name: "David Wilson",
      email: "david.wilson@safari.com",
      role: "Travel Agent",
      status: "inactive",
      lastLogin: "2023-05-28 03:40 PM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <Button asChild>
          <Link href="/admin/new-user">
            <Plus className="mr-2 h-4 w-4" /> New User
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage user accounts and access permissions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <SearchIcon className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search users..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "active" ? "success" : "outline"}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
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
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Edit user
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserCog className="mr-2 h-4 w-4" /> Manage permissions
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Key className="mr-2 h-4 w-4" /> Reset password
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" /> Delete user
                          </DropdownMenuItem>
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

