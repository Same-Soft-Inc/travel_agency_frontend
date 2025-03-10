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
import { MoreHorizontal, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface VisaApplicationsTableProps {
  status?: "pending" | "approved" | "rejected"
}

export function VisaApplicationsTable({ status }: VisaApplicationsTableProps) {
  const filteredApplications = status
    ? visaApplications.filter((application) => application.status === status)
    : visaApplications

  return (
    <div className="rounded-md border overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Application ID</TableHead>
            <TableHead>Applicant</TableHead>
            <TableHead className="hidden md:table-cell">Country</TableHead>
            <TableHead className="hidden md:table-cell">Visa Type</TableHead>
            <TableHead className="hidden md:table-cell">Submission Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredApplications.map((application) => (
            <TableRow key={application.id}>
              <TableCell className="font-medium">{application.id}</TableCell>
              <TableCell>{application.applicant}</TableCell>
              <TableCell className="hidden md:table-cell">{application.country}</TableCell>
              <TableCell className="hidden md:table-cell">{application.visaType}</TableCell>
              <TableCell className="hidden md:table-cell">{application.submissionDate}</TableCell>
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
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit application</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <MoreHorizontal className="mr-2 h-4 w-4" /> Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <X className="mr-2 h-4 w-4" /> Reject
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

const visaApplications = [
  {
    id: "V-1001",
    applicant: "Mohamed Ahmed",
    country: "United Arab Emirates",
    visaType: "Tourist",
    submissionDate: "2023-06-15",
    status: "approved",
  },
  {
    id: "V-1002",
    applicant: "Amina Hassan",
    country: "France",
    visaType: "Business",
    submissionDate: "2023-07-22",
    status: "pending",
  },
  {
    id: "V-1003",
    applicant: "Abdikarim Farah",
    country: "Japan",
    visaType: "Work",
    submissionDate: "2023-08-10",
    status: "approved",
  },
  {
    id: "V-1004",
    applicant: "Hodan Ali",
    country: "United States",
    visaType: "Student",
    submissionDate: "2023-09-05",
    status: "rejected",
  },
  {
    id: "V-1005",
    applicant: "Yusuf Ibrahim",
    country: "Australia",
    visaType: "Tourist",
    submissionDate: "2023-10-18",
    status: "pending",
  },
  {
    id: "V-1006",
    applicant: "Fartun Omar",
    country: "Italy",
    visaType: "Business",
    submissionDate: "2023-11-12",
    status: "approved",
  },
  {
    id: "V-1007",
    applicant: "Abdirahman Jama",
    country: "Thailand",
    visaType: "Tourist",
    submissionDate: "2023-12-20",
    status: "pending",
  },
  {
    id: "V-1008",
    applicant: "Sahra Mohamed",
    country: "United Kingdom",
    visaType: "Work",
    submissionDate: "2024-01-08",
    status: "approved",
  },
  {
    id: "V-1009",
    applicant: "Hassan Abdi",
    country: "Egypt",
    visaType: "Tourist",
    submissionDate: "2024-02-15",
    status: "rejected",
  },
  {
    id: "V-1010",
    applicant: "Asha Nur",
    country: "Spain",
    visaType: "Business",
    submissionDate: "2024-03-22",
    status: "pending",
  },
]

