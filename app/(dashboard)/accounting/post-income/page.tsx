import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign } from "lucide-react"

export default function PostIncomePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Post Income</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Income Entry</CardTitle>
          <CardDescription>Record income from various sources.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="entryDate">Entry Date</Label>
              <Input id="entryDate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="incomeType">Income Type</Label>
              <Select>
                <SelectTrigger id="incomeType">
                  <SelectValue placeholder="Select income type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Revenue</SelectItem>
                  <SelectItem value="commission">Commission Income</SelectItem>
                  <SelectItem value="service">Service Fees</SelectItem>
                  <SelectItem value="interest">Interest Income</SelectItem>
                  <SelectItem value="other">Other Income</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="customer">Customer (Optional)</Label>
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
              <Label htmlFor="account">Deposit Account</Label>
              <Select>
                <SelectTrigger id="account">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash Account</SelectItem>
                  <SelectItem value="bank1">Bank Account 1</SelectItem>
                  <SelectItem value="bank2">Bank Account 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter details about the income" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reference">Reference Number (Optional)</Label>
            <Input id="reference" placeholder="Enter reference number" />
          </div>
          <Button>Post Income</Button>
        </CardContent>
      </Card>
    </div>
  )
}

