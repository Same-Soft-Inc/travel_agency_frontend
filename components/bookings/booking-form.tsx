"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { useState } from "react"

export function BookingForm() {
  const [tripType, setTripType] = useState("one-way")

  return (
    <Card className="relative overflow-hidden">
      {/* World Map Background - Semi-transparent */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('/world-map.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <CardContent className="p-6">
        <form className="space-y-6">
          {/* Trip Type Selection */}
          <RadioGroup defaultValue="one-way" className="flex gap-4" onValueChange={setTripType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-way" id="one-way" />
              <Label htmlFor="one-way">One Way</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="two-way" id="two-way" />
              <Label htmlFor="two-way">Two Way</Label>
            </div>
          </RadioGroup>

          {/* Destinations */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="from">From</Label>
              <Input id="from" placeholder="Enter departure city" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="to">To</Label>
              <Input id="to" placeholder="Enter destination city" />
            </div>
          </div>

          {/* Passenger and Booking Type */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Passenger</Label>
              <Select defaultValue="adult">
                <SelectTrigger>
                  <SelectValue placeholder="Select passenger type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adult">Adult</SelectItem>
                  <SelectItem value="child">Child</SelectItem>
                  <SelectItem value="infant">Infant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Booking Type</Label>
              <Select defaultValue="local">
                <SelectTrigger>
                  <SelectValue placeholder="Select booking type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Departure</Label>
              <DatePicker />
            </div>
            {tripType === "two-way" && (
              <div className="space-y-2">
                <Label>Return</Label>
                <DatePicker />
              </div>
            )}
          </div>

          {/* Class Selection */}
          <div className="space-y-2">
            <Label>Class</Label>
            <Select defaultValue="economy">
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="first">First Class</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Airline and Agent Selection */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label>Airline / Vendor</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select airline/vendor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emirates">Emirates</SelectItem>
                  <SelectItem value="qatar">Qatar Airways</SelectItem>
                  <SelectItem value="ethiopian">Ethiopian Airlines</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Carrier</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select carrier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carrier1">Carrier 1</SelectItem>
                  <SelectItem value="carrier2">Carrier 2</SelectItem>
                  <SelectItem value="carrier3">Carrier 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Agent</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select agent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agent1">Agent 1</SelectItem>
                  <SelectItem value="agent2">Agent 2</SelectItem>
                  <SelectItem value="agent3">Agent 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <Button className="bg-green-500 hover:bg-green-600 text-white">Next</Button>
        </form>
      </CardContent>
    </Card>
  )
}

