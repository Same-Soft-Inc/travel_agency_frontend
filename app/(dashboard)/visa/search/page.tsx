"use client"

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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, Eye, MoreHorizontal, SearchIcon, X } from "lucide-react"
import { useState } from "react"

interface VisaApplication {
  id: string
  applicant: string
  country: string
  visaType: string
  submissionDate: string
  status: "pending" | "approved" | "rejected"
}

export default function VisaSearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [visaTypeFilter, setVisaTypeFilter] = useState<string>("all")

  const allApplications: VisaApplication[] = [
    {
      id: "V-1001",
      applicant: "John Smith",
      country: "United Arab Emirates",
      visaType: "Tourist",
      submissionDate: "2023-06-15",
      status: "approved",
    },
    {
      id: "V-1002",
      applicant: "Sarah Johnson",
      country: "France",
      visaType: "Business",
      submissionDate: "2023-07-22",
      status: "pending",
    },
    {
      id: "V-1003",
      applicant: "Michael Brown",
      country: "Japan",
      visaType: "Work",
      submissionDate: "2023-08-10",
      status: "approved",
    },
    {
      id: "V-1004",
      applicant: "Emily Davis",
      country: "United States",
      visaType: "Student",
      submissionDate: "2023-09-05",
      status: "rejected",
    },
    {
      id: "V-1005",
      applicant: "David Wilson",
      country: "Australia",
      visaType: "Tourist",
      submissionDate: "2023-10-18",
      status: "pending",
    },
    {
      id: "V-1006",
      applicant: "Jennifer Lee",
      country: "Italy",
      visaType: "Business",
      submissionDate: "2023-11-12",
      status: "approved",
    },
    {
      id: "V-1007",
      applicant: "Robert Taylor",
      country: "Thailand",
      visaType: "Tourist",
      submissionDate: "2023-12-20",
      status: "pending",
    },
    {
      id: "V-1008",
      applicant: "Lisa Anderson",
      country: "United Kingdom",
      visaType: "Work",
      submissionDate: "2024-01-08",
      status: "approved",
    },
    {
      id: "V-1009",
      applicant: "James Martin",
      country: "Egypt",
      visaType: "Tourist",
      submissionDate: "2024-02-15",
      status: "rejected",
    },
    {
      id: "V-1010",
      applicant: "Patricia White",
      country: "Spain",
      visaType: "Business",
      submissionDate: "2024-03-22",
      status: "pending",
    },
  ]

  const filteredApplications = allApplications.filter((app) => {
    const matchesSearch =
      app.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || app.status === statusFilter
    const matchesVisaType = visaTypeFilter === "all" || app.visaType === visaTypeFilter

    return matchesSearch && matchesStatus && matchesVisaType
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Search Visa Applications</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Visa Application Search</CardTitle>
          <CardDescription>Search and filter visa applications by various criteria.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="searchTerm">Search</Label>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="searchTerm"
                  placeholder="Search by applicant name or ID"
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="statusFilter">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger id="statusFilter">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="visaTypeFilter">Visa Type</Label>
              <Select value={visaTypeFilter} onValueChange={setVisaTypeFilter}>
                <SelectTrigger id="visaTypeFilter">
                  <SelectValue placeholder="Filter by visa type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Tourist">Tourist</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Work">Work</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Visa Type</TableHead>
                  <TableHead>Submission Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">{application.id}</TableCell>
                      <TableCell>{application.applicant}</TableCell>
                      <TableCell>{application.country}</TableCell>
                      <TableCell>{application.visaType}</TableCell>
                      <TableCell>{application.submissionDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            application.status === "approved"
                              ? "success"
                              : application.status === "pending"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {application.status}
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
                            <DropdownMenuItem>Edit application</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Check className="mr-2 h-4 w-4" /> Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <X className="mr-2 h-4 w-4" /> Reject
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No visa applications found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

