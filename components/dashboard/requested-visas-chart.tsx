"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Tourist", value: 350 },
  { name: "Business", value: 220 },
  { name: "Student", value: 180 },
  { name: "Work", value: 120 },
  { name: "Umrah", value: 280 },
]

export function RequestedVisasChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={80} />
        <Tooltip />
        <Bar dataKey="value" fill="hsl(var(--chart-3))" name="Requests" />
      </BarChart>
    </ResponsiveContainer>
  )
}

