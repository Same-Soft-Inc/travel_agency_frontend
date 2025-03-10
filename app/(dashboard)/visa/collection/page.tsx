import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, MoreHorizontal, Printer, Search } from "lucide-react"

export default function VisaCollectionPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Visa Collection</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Search Approved Visas</CardTitle>
          <CardDescription>Find approved visas ready for collection.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="visaId">Visa Application ID</Label>
              <Input id="visaId" placeholder="Enter visa application ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="applicantName">Applicant Name</Label>
              <Input id="applicantName" placeholder="Enter applicant name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="visaType">Visa Type</Label>
              <Select>
                <SelectTrigger id="visaType">
                  <SelectValue placeholder="Select visa type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="tourist">Tourist</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="umrah">Umrah</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search Visas
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visas Ready for Collection</CardTitle>
          <CardDescription>Manage visa collection and delivery to customers.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Visa Type</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Approval Date</TableHead>
                  <TableHead>Collection Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">V-100{i}</TableCell>
                    <TableCell>Applicant {i}</TableCell>
                    <TableCell>{["Tourist", "Business", "Work", "Student", "Umrah"][i - 1]}</TableCell>
                    <TableCell>{["UAE", "USA", "UK", "Australia", "Saudi Arabia"][i - 1]}</TableCell>
                    <TableCell>2023-06-{10 + i}</TableCell>
                    <TableCell>
                      <Badge variant={i % 2 === 0 ? "outline" : "success"}>{i % 2 === 0 ? "Ready" : "Collected"}</Badge>
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
                            <Check className="mr-2 h-4 w-4" /> Mark as collected
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Printer className="mr-2 h-4 w-4" /> Print collection receipt
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

