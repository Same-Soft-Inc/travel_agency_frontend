import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { DollarSign, Plus, Search } from "lucide-react"

export default function PostUmrahChargesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Post Umrah Visa Charges</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Search Umrah Visa Applications</CardTitle>
          <CardDescription>Find Umrah visa applications to post charges for.</CardDescription>
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
              <Label htmlFor="status">Application Status</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search Applications
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Post Umrah Charges</CardTitle>
          <CardDescription>Select applications and post Umrah visa processing charges.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Travel Date</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Base Fee</TableHead>
                  <TableHead>Additional Charges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-10 text-muted-foreground">
                    No Umrah visa applications found. Please search to view results.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="border rounded-md p-4">
            <h3 className="font-medium mb-4">Add Umrah Package Charges</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="packageType">Package Type</Label>
                <Select>
                  <SelectTrigger id="packageType">
                    <SelectValue placeholder="Select package type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Package</SelectItem>
                    <SelectItem value="standard">Standard Package</SelectItem>
                    <SelectItem value="premium">Premium Package</SelectItem>
                    <SelectItem value="vip">VIP Package</SelectItem>
                    <SelectItem value="custom">Custom Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="chargeAmount">Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="chargeAmount" className="pl-9" placeholder="0.00" />
                </div>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Package
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Post All Charges</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

