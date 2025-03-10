import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookingsTable } from "@/components/bookings/bookings-table"
import { Search } from "lucide-react"

export default function BookingsSearchPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Search Bookings</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Search Criteria</CardTitle>
          <CardDescription>Enter details to search for specific bookings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="bookingId">Booking ID</Label>
              <Input id="bookingId" placeholder="Enter booking ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="customerName">Customer Name</Label>
              <Input id="customerName" placeholder="Enter customer name" />
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
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateFrom">Date From</Label>
              <Input id="dateFrom" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateTo">Date To</Label>
              <Input id="dateTo" type="date" />
            </div>
          </div>
          <Button className="w-full md:w-auto">
            <Search className="mr-2 h-4 w-4" /> Search Bookings
          </Button>
        </CardContent>
      </Card>
      <BookingsTable />
    </div>
  )
}

