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
import { Edit, MoreHorizontal, Plus, SearchIcon, Trash } from "lucide-react"
import { useState } from "react"

interface Account {
  id: string
  code: string
  name: string
  type: string
  category: string
  balance: number
  status: "active" | "inactive"
}

export default function ChartOfAccountsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const accounts: Account[] = [
    {
      id: "A-1001",
      code: "1000",
      name: "Cash",
      type: "Asset",
      category: "Current Asset",
      balance: 25000,
      status: "active",
    },
    {
      id: "A-1002",
      code: "1010",
      name: "Bank Account",
      type: "Asset",
      category: "Current Asset",
      balance: 150000,
      status: "active",
    },
    {
      id: "A-1003",
      code: "1100",
      name: "Accounts Receivable",
      type: "Asset",
      category: "Current Asset",
      balance: 45000,
      status: "active",
    },
    {
      id: "A-1004",
      code: "2000",
      name: "Accounts Payable",
      type: "Liability",
      category: "Current Liability",
      balance: 35000,
      status: "active",
    },
    {
      id: "A-1005",
      code: "3000",
      name: "Capital",
      type: "Equity",
      category: "Owner's Equity",
      balance: 200000,
      status: "active",
    },
    {
      id: "A-1006",
      code: "4000",
      name: "Sales Revenue",
      type: "Revenue",
      category: "Income",
      balance: 350000,
      status: "active",
    },
    {
      id: "A-1007",
      code: "5000",
      name: "Cost of Sales",
      type: "Expense",
      category: "Direct Expense",
      balance: 180000,
      status: "active",
    },
    {
      id: "A-1008",
      code: "6000",
      name: "Salaries Expense",
      type: "Expense",
      category: "Operating Expense",
      balance: 120000,
      status: "active",
    },
    {
      id: "A-1009",
      code: "6100",
      name: "Rent Expense",
      type: "Expense",
      category: "Operating Expense",
      balance: 36000,
      status: "active",
    },
    {
      id: "A-1010",
      code: "6200",
      name: "Utilities Expense",
      type: "Expense",
      category: "Operating Expense",
      balance: 18000,
      status: "active",
    },
  ]

  const filteredAccounts = accounts.filter(
    (account) =>
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.code.includes(searchTerm) ||
      account.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Chart of Accounts</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Account
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Accounts</CardTitle>
          <CardDescription>Manage your company's chart of accounts.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <SearchIcon className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search accounts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <Button variant="outline" size="sm">
                Import
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Account Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAccounts.map((account) => (
                  <TableRow key={account.id}>
                    <TableCell className="font-medium">{account.code}</TableCell>
                    <TableCell>{account.name}</TableCell>
                    <TableCell>{account.type}</TableCell>
                    <TableCell>{account.category}</TableCell>
                    <TableCell>${account.balance.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={account.status === "active" ? "success" : "outline"}>{account.status}</Badge>
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
                          <DropdownMenuItem>View transactions</DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Edit account
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" /> Delete account
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

