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
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react"

export default function ManageVisaTypesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Manage Visa Types</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Visa Type
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Visa Types</CardTitle>
          <CardDescription>Manage the different types of visas offered by your agency.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Input placeholder="Search visa types..." className="max-w-sm" />
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Visa Type</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Processing Time</TableHead>
                  <TableHead>Base Fee</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { type: "Tourist", country: "UAE", time: "3-5 days", fee: "$150.00", active: true },
                  { type: "Business", country: "UAE", time: "5-7 days", fee: "$250.00", active: true },
                  { type: "Tourist", country: "USA", time: "10-15 days", fee: "$300.00", active: true },
                  { type: "Student", country: "UK", time: "15-20 days", fee: "$200.00", active: true },
                  { type: "Work", country: "Australia", time: "20-25 days", fee: "$400.00", active: false },
                  { type: "Umrah", country: "Saudi Arabia", time: "7-10 days", fee: "$180.00", active: true },
                  { type: "Tourist", country: "Schengen", time: "10-15 days", fee: "$220.00", active: true },
                ].map((visa, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{visa.type}</TableCell>
                    <TableCell>{visa.country}</TableCell>
                    <TableCell>{visa.time}</TableCell>
                    <TableCell>{visa.fee}</TableCell>
                    <TableCell>
                      <Badge variant={visa.active ? "success" : "outline"}>{visa.active ? "Active" : "Inactive"}</Badge>
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
                            <Edit className="mr-2 h-4 w-4" /> Edit visa type
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" /> Delete visa type
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

