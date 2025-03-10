"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", visas: 65 },
  { name: "Feb", visas: 78 },
  { name: "Mar", visas: 90 },
  { name: "Apr", visas: 81 },
  { name: "May", visas: 95 },
  { name: "Jun", visas: 110 },
  { name: "Jul", visas: 129 },
  { name: "Aug", visas: 140 },
  { name: "Sep", visas: 112 },
  { name: "Oct", visas: 105 },
  { name: "Nov", visas: 98 },
  { name: "Dec", visas: 120 },
]

export function VisaGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="visas" fill="hsl(var(--chart-1))" name="Visa Applications" />
      </BarChart>
    </ResponsiveContainer>
  )
}

