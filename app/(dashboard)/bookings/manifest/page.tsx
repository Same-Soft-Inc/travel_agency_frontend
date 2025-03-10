import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Search } from "lucide-react"

export default function ManifestPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Manifest</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>Generate Manifest</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Manifest Generator</CardTitle>
          <CardDescription>Generate a manifest for a specific flight or travel group.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="flightNumber">Flight Number</Label>
              <Input id="flightNumber" placeholder="Enter flight number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="departureDate">Departure Date</Label>
              <Input id="departureDate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Select>
                <SelectTrigger id="destination">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dubai">Dubai, UAE</SelectItem>
                  <SelectItem value="paris">Paris, France</SelectItem>
                  <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                  <SelectItem value="newyork">New York, USA</SelectItem>
                  <SelectItem value="london">London, UK</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search Bookings
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Passenger Manifest</CardTitle>
          <CardDescription>List of passengers for the selected flight.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Passenger Name</TableHead>
                <TableHead>Passport Number</TableHead>
                <TableHead>Nationality</TableHead>
                <TableHead>Booking ID</TableHead>
                <TableHead>Seat Number</TableHead>
                <TableHead>Special Requests</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                  No passengers found. Please search for a flight.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

