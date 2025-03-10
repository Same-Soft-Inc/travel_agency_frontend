"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface SalaryEntry {
  id: string
  name: string
  position: string
  basicSalary: number
  allowances: number
  deductions: number
  netSalary: number
  selected: boolean
}

export default function PostSalaryPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [salaryMonth, setSalaryMonth] = useState<string>("")
  const [salaryYear, setSalaryYear] = useState<string>("")
  const [employees, setEmployees] = useState<SalaryEntry[]>([
    {
      id: "E-1001",
      name: "John Smith",
      position: "Travel Consultant",
      basicSalary: 3500,
      allowances: 500,
      deductions: 200,
      netSalary: 3800,
      selected: false,
    },
    {
      id: "E-1002",
      name: "Sarah Johnson",
      position: "Visa Specialist",
      basicSalary: 4000,
      allowances: 600,
      deductions: 250,
      netSalary: 4350,
      selected: false,
    },
    {
      id: "E-1003",
      name: "Michael Brown",
      position: "Accountant",
      basicSalary: 4500,
      allowances: 700,
      deductions: 300,
      netSalary: 4900,
      selected: false,
    },
    {
      id: "E-1004",
      name: "Emily Davis",
      position: "HR Manager",
      basicSalary: 5000,
      allowances: 800,
      deductions: 350,
      netSalary: 5450,
      selected: false,
    },
    {
      id: "E-1005",
      name: "David Wilson",
      position: "Marketing Specialist",
      basicSalary: 3800,
      allowances: 550,
      deductions: 220,
      netSalary: 4130,
      selected: false,
    },
  ])

  const toggleSelectAll = (checked: boolean) => {
    setEmployees(employees.map((emp) => ({ ...emp, selected: checked })))
  }

  const toggleSelectEmployee = (id: string, checked: boolean) => {
    setEmployees(employees.map((emp) => (emp.id === id ? { ...emp, selected: checked } : emp)))
  }

  const getTotalAmount = () => {
    return employees.filter((emp) => emp.selected).reduce((sum, emp) => sum + emp.netSalary, 0)
  }

  const getSelectedCount = () => {
    return employees.filter((emp) => emp.selected).length
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/hrm")
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Post Salary</h1>
      </div>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Salary Processing</CardTitle>
            <CardDescription>Process and post employee salaries for the selected period.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="salaryMonth">Salary Month</Label>
                <Select value={salaryMonth} onValueChange={setSalaryMonth}>
                  <SelectTrigger id="salaryMonth">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">January</SelectItem>
                    <SelectItem value="02">February</SelectItem>
                    <SelectItem value="03">March</SelectItem>
                    <SelectItem value="04">April</SelectItem>
                    <SelectItem value="05">May</SelectItem>
                    <SelectItem value="06">June</SelectItem>
                    <SelectItem value="07">July</SelectItem>
                    <SelectItem value="08">August</SelectItem>
                    <SelectItem value="09">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryYear">Salary Year</Label>
                <Select value={salaryYear} onValueChange={setSalaryYear}>
                  <SelectTrigger id="salaryYear">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentDate">Payment Date</Label>
                <DatePicker />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Employee Salaries</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="selectAll" onCheckedChange={(checked) => toggleSelectAll(checked as boolean)} />
                  <label
                    htmlFor="selectAll"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Select All
                  </label>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">Select</TableHead>
                      <TableHead>Employee ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Basic Salary</TableHead>
                      <TableHead>Allowances</TableHead>
                      <TableHead>Deductions</TableHead>
                      <TableHead>Net Salary</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>
                          <Checkbox
                            checked={employee.selected}
                            onCheckedChange={(checked) => toggleSelectEmployee(employee.id, checked as boolean)}
                          />
                        </TableCell>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell>${employee.basicSalary.toFixed(2)}</TableCell>
                        <TableCell>${employee.allowances.toFixed(2)}</TableCell>
                        <TableCell>${employee.deductions.toFixed(2)}</TableCell>
                        <TableCell>${employee.netSalary.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="rounded-md border p-4 bg-muted/40">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Selected Employees: {getSelectedCount()}</p>
                  <p className="text-sm text-muted-foreground">
                    {salaryMonth && salaryYear
                      ? `Salary for ${new Date(Number.parseInt(salaryYear), Number.parseInt(salaryMonth) - 1).toLocaleString("default", { month: "long" })} ${salaryYear}`
                      : "Please select month and year"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Total Amount:</p>
                  <p className="text-xl font-bold">${getTotalAmount().toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter any additional notes" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || getSelectedCount() === 0 || !salaryMonth || !salaryYear}>
              {isSubmitting ? "Processing..." : "Post Salary"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

