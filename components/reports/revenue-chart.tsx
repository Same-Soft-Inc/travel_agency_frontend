"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    flights: 4000,
    hotels: 2400,
    packages: 2400,
    visas: 1200,
  },
  {
    name: "Feb",
    flights: 3000,
    hotels: 1398,
    packages: 2210,
    visas: 900,
  },
  {
    name: "Mar",
    flights: 2000,
    hotels: 9800,
    packages: 2290,
    visas: 1100,
  },
  {
    name: "Apr",
    flights: 2780,
    hotels: 3908,
    packages: 2000,
    visas: 800,
  },
  {
    name: "May",
    flights: 1890,
    hotels: 4800,
    packages: 2181,
    visas: 1300,
  },
  {
    name: "Jun",
    flights: 2390,
    hotels: 3800,
    packages: 2500,
    visas: 1000,
  },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="flights" fill="#8884d8" name="Flights" />
        <Bar dataKey="hotels" fill="#82ca9d" name="Hotels" />
        <Bar dataKey="packages" fill="#ffc658" name="Packages" />
        <Bar dataKey="visas" fill="#ff8042" name="Visas" />
      </BarChart>
    </ResponsiveContainer>
  )
}

