import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign, Printer } from "lucide-react"

export default function VisaCashPaymentPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Visa Cash Payment</h1>
        <Button>
          <Printer className="mr-2 h-4 w-4" /> Print Receipt
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Cash Payment Details</CardTitle>
          <CardDescription>Record a cash payment for visa application fees.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="receiptNumber">Receipt Number</Label>
              <Input id="receiptNumber" placeholder="Auto-generated" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
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
                  <SelectItem value="tourist">Tourist</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="umrah">Umrah</SelectItem>
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
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Enter any additional notes" />
          </div>
          <Button className="w-full md:w-auto">Record Payment</Button>
        </CardContent>
      </Card>
    </div>
  )
}

