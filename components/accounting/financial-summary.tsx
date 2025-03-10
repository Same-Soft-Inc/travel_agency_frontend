"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    revenue: 4000,
    expenses: 2400,
  },
  {
    name: "Feb",
    revenue: 3000,
    expenses: 1398,
  },
  {
    name: "Mar",
    revenue: 9800,
    expenses: 2000,
  },
  {
    name: "Apr",
    revenue: 3908,
    expenses: 2780,
  },
  {
    name: "May",
    revenue: 4800,
    expenses: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    expenses: 2390,
  },
  {
    name: "Jul",
    revenue: 4300,
    expenses: 3490,
  },
  {
    name: "Aug",
    revenue: 5300,
    expenses: 3200,
  },
  {
    name: "Sep",
    revenue: 4800,
    expenses: 2900,
  },
  {
    name: "Oct",
    revenue: 5000,
    expenses: 3100,
  },
  {
    name: "Nov",
    revenue: 4200,
    expenses: 2800,
  },
  {
    name: "Dec",
    revenue: 6000,
    expenses: 3500,
  },
]

export function FinancialSummary() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

