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
import { Eye, MoreHorizontal, Plus, Search } from "lucide-react"
import Link from "next/link"

export default function QuotationsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Quotations</h1>
        <Button asChild>
          <Link href="/bookings/quotations/new">
            <Plus className="mr-2 h-4 w-4" /> New Quotation
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Manage Quotations</CardTitle>
          <CardDescription>View and manage travel quotations for customers.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search quotations..." className="pl-8" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quotation ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">Q-100{i}</TableCell>
                    <TableCell>Customer {i}</TableCell>
                    <TableCell>{["Dubai", "Paris", "Tokyo", "London", "New York"][i - 1]}</TableCell>
                    <TableCell>2023-06-{10 + i}</TableCell>
                    <TableCell>${1000 + i * 500}.00</TableCell>
                    <TableCell>
                      <Badge variant={i % 3 === 0 ? "outline" : i % 3 === 1 ? "success" : "destructive"}>
                        {i % 3 === 0 ? "Pending" : i % 3 === 1 ? "Accepted" : "Expired"}
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
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" /> View details
                          </DropdownMenuItem>
                          <DropdownMenuItem>Edit quotation</DropdownMenuItem>
                          <DropdownMenuItem>Convert to booking</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete quotation</DropdownMenuItem>
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

