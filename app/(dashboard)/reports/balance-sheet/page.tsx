"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/ui/date-picker"
import { Download, Printer } from "lucide-react"
import { useState } from "react"

export default function BalanceSheetPage() {
  const [period, setPeriod] = useState("current")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Balance Sheet</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Report Parameters</CardTitle>
          <CardDescription>Select the parameters for the balance sheet report.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="period">Period</Label>
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger id="period">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Month</SelectItem>
                  <SelectItem value="previous">Previous Month</SelectItem>
                  <SelectItem value="quarter">Current Quarter</SelectItem>
                  <SelectItem value="year">Current Year</SelectItem>
                  <SelectItem value="custom">Custom Date Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {period === "custom" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <DatePicker />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <DatePicker />
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Balance Sheet</CardTitle>
          <CardDescription>As of June 30, 2023</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Assets</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Current Assets</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="pl-4">Cash</span>
                      <span>$25,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="pl-4">Bank Account</span>
                      <span>$150,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="pl-4">Accounts Receivable</span>
                      <span>$45,000.00</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Total Current Assets</span>
                      <span>$220,000.00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Fixed Assets</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="pl-4">Furniture and Equipment</span>
                      <span>$75,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="pl-4">Vehicles</span>
                      <span>$45,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="pl-4">Less: Accumulated Depreciation</span>
                      <span>($25,000.00)</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Total Fixed Assets</span>
                      <span>$95,000.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>Total Assets</span>
                  <span>$315,000.00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liabilities and Equity</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Current Liabilities</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="pl-4">Accounts Payable</span>
                      <span>$35,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="pl-4">Accrued Expenses</span>
                      <span>$15,000.00</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Total Current Liabilities</span>
                      <span>$50,000.00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Long-term Liabilities</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="pl-4">Bank Loan</span>
                      <span>$65,000.00</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Total Long-term Liabilities</span>
                      <span>$65,000.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between font-medium pt-2 border-t">
                  <span>Total Liabilities</span>
                  <span>$115,000.00</span>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Equity</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="pl-4">Capital</span>
                      <span>$200,000.00</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Total Equity</span>
                      <span>$200,000.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>Total Liabilities and Equity</span>
                  <span>$315,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

