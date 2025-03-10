import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign } from "lucide-react"

export default function PostUnearnedRevenuePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Post Unearned Revenue</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Unearned Revenue Entry</CardTitle>
          <CardDescription>Record advance payments received for services not yet provided.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="entryDate">Entry Date</Label>
              <Input id="entryDate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="customer">Customer</Label>
              <Select>
                <SelectTrigger id="customer">
                  <SelectValue placeholder="Select customer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cust1">Customer 1</SelectItem>
                  <SelectItem value="cust2">Customer 2</SelectItem>
                  <SelectItem value="cust3">Customer 3</SelectItem>
                  <SelectItem value="cust4">Customer 4</SelectItem>
                  <SelectItem value="cust5">Customer 5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bookingId">Booking ID (Optional)</Label>
              <Input id="bookingId" placeholder="Enter booking ID if applicable" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="amount" className="pl-9" placeholder="0.00" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select>
                <SelectTrigger id="paymentMethod">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="card">Credit/Debit Card</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="check">Check</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expectedServiceDate">Expected Service Date</Label>
              <Input id="expectedServiceDate" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter details about the unearned revenue" />
          </div>
          <Button>Post Unearned Revenue</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Unearned Revenue Entries</CardTitle>
          <CardDescription>View and manage recent unearned revenue entries.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Entry ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Expected Service Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">UER-100{i}</TableCell>
                    <TableCell>2023-06-{10 + i}</TableCell>
                    <TableCell>Customer {i}</TableCell>
                    <TableCell>
                      Advance payment for {["flight", "hotel", "package", "tour", "visa"][i - 1]} booking
                    </TableCell>
                    <TableCell>${(1000 + i * 500).toFixed(2)}</TableCell>
                    <TableCell>
                      2023-{7 + Math.floor(i / 2)}-{15 + i}
                    </TableCell>
                    <TableCell>{i < 3 ? "Pending" : "Recognized"}</TableCell>
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

