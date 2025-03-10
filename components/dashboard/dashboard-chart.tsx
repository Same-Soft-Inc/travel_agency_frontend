"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    Flights: 4000,
    Hotels: 2400,
    Visas: 2400,
  },
  {
    name: "Feb",
    Flights: 3000,
    Hotels: 1398,
    Visas: 2210,
  },
  {
    name: "Mar",
    Flights: 2000,
    Hotels: 9800,
    Visas: 2290,
  },
  {
    name: "Apr",
    Flights: 2780,
    Hotels: 3908,
    Visas: 2000,
  },
  {
    name: "May",
    Flights: 1890,
    Hotels: 4800,
    Visas: 2181,
  },
  {
    name: "Jun",
    Flights: 2390,
    Hotels: 3800,
    Visas: 2500,
  },
  {
    name: "Jul",
    Flights: 3490,
    Hotels: 4300,
    Visas: 2100,
  },
]

export function DashboardChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Flights" fill="#8884d8" />
        <Bar dataKey="Hotels" fill="#82ca9d" />
        <Bar dataKey="Visas" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}

