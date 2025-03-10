"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FundTransferPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/accounting")
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Fund Transfer</h1>
      </div>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Transfer Funds Between Accounts</CardTitle>
            <CardDescription>Move funds from one account to another.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fromAccount">From Account</Label>
                <Select>
                  <SelectTrigger id="fromAccount">
                    <SelectValue placeholder="Select source account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash Account</SelectItem>
                    <SelectItem value="bank1">Bank Account 1</SelectItem>
                    <SelectItem value="bank2">Bank Account 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="toAccount">To Account</Label>
                <Select>
                  <SelectTrigger id="toAccount">
                    <SelectValue placeholder="Select destination account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash Account</SelectItem>
                    <SelectItem value="bank1">Bank Account 1</SelectItem>
                    <SelectItem value="bank2">Bank Account 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="transferDate">Transfer Date</Label>
                <DatePicker />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" placeholder="Enter amount" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reference">Reference Number</Label>
                <Input id="reference" placeholder="Enter reference number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transferFee">Transfer Fee (if any)</Label>
                <Input id="transferFee" type="number" placeholder="Enter transfer fee" defaultValue="0" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter transfer description" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Transfer Funds"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

