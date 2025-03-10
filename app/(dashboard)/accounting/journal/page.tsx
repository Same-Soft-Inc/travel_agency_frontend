"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Trash } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface JournalEntry {
  id: number
  account: string
  description: string
  debit: number
  credit: number
}

export default function JournalPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [entries, setEntries] = useState<JournalEntry[]>([{ id: 1, account: "", description: "", debit: 0, credit: 0 }])
  const [totalDebit, setTotalDebit] = useState(0)
  const [totalCredit, setTotalCredit] = useState(0)

  const addEntry = () => {
    const newId = entries.length > 0 ? Math.max(...entries.map((e) => e.id)) + 1 : 1
    setEntries([...entries, { id: newId, account: "", description: "", debit: 0, credit: 0 }])
  }

  const removeEntry = (id: number) => {
    if (entries.length > 1) {
      setEntries(entries.filter((entry) => entry.id !== id))
      calculateTotals(entries.filter((entry) => entry.id !== id))
    }
  }

  const updateEntry = (id: number, field: keyof JournalEntry, value: string | number) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, [field]: value }
      }
      return entry
    })
    setEntries(updatedEntries)

    if (field === "debit" || field === "credit") {
      calculateTotals(updatedEntries)
    }
  }

  const calculateTotals = (entries: JournalEntry[]) => {
    const debitTotal = entries.reduce((sum, entry) => sum + (Number(entry.debit) || 0), 0)
    const creditTotal = entries.reduce((sum, entry) => sum + (Number(entry.credit) || 0), 0)
    setTotalDebit(debitTotal)
    setTotalCredit(creditTotal)
  }

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
        <h1 className="text-3xl font-bold tracking-tight">Journal Entry</h1>
      </div>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Journal Entry Details</CardTitle>
            <CardDescription>Create a new journal entry with multiple accounts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="entryNumber">Entry Number</Label>
                <Input id="entryNumber" placeholder="Auto-generated" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entryDate">Entry Date</Label>
                <DatePicker />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reference">Reference</Label>
                <Input id="reference" placeholder="Enter reference" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Journal Entries</Label>
                <Button type="button" variant="outline" size="sm" onClick={addEntry}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Line
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Debit</TableHead>
                      <TableHead>Credit</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {entries.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>
                          <Select
                            value={entry.account}
                            onValueChange={(value) => updateEntry(entry.id, "account", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select account" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cash">Cash</SelectItem>
                              <SelectItem value="bank">Bank</SelectItem>
                              <SelectItem value="accounts_receivable">Accounts Receivable</SelectItem>
                              <SelectItem value="accounts_payable">Accounts Payable</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="purchases">Purchases</SelectItem>
                              <SelectItem value="expenses">Expenses</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            placeholder="Description"
                            value={entry.description}
                            onChange={(e) => updateEntry(entry.id, "description", e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            placeholder="0.00"
                            value={entry.debit || ""}
                            onChange={(e) => updateEntry(entry.id, "debit", Number.parseFloat(e.target.value) || 0)}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            placeholder="0.00"
                            value={entry.credit || ""}
                            onChange={(e) => updateEntry(entry.id, "credit", Number.parseFloat(e.target.value) || 0)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeEntry(entry.id)}
                            disabled={entries.length <= 1}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={2} className="text-right font-medium">
                        Totals
                      </TableCell>
                      <TableCell className="font-medium">{totalDebit.toFixed(2)}</TableCell>
                      <TableCell className="font-medium">{totalCredit.toFixed(2)}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {totalDebit !== totalCredit && (
                <p className="text-sm text-destructive">
                  Journal entry is not balanced. Debit and credit totals must be equal.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter additional notes" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || totalDebit !== totalCredit || totalDebit === 0}>
              {isSubmitting ? "Processing..." : "Post Journal Entry"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

