"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    flights: 400,
    hotels: 240,
    packages: 240,
    visas: 120,
  },
  {
    name: "Feb",
    flights: 300,
    hotels: 139,
    packages: 221,
    visas: 90,
  },
  {
    name: "Mar",
    flights: 200,
    hotels: 980,
    packages: 229,
    visas: 110,
  },
  {
    name: "Apr",
    flights: 278,
    hotels: 390,
    packages: 200,
    visas: 80,
  },
  {
    name: "May",
    flights: 189,
    hotels: 480,
    packages: 218,
    visas: 130,
  },
  {
    name: "Jun",
    flights: 239,
    hotels: 380,
    packages: 250,
    visas: 100,
  },
]

export function BookingsTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="flights" stroke="#8884d8" name="Flights" />
        <Line type="monotone" dataKey="hotels" stroke="#82ca9d" name="Hotels" />
        <Line type="monotone" dataKey="packages" stroke="#ffc658" name="Packages" />
        <Line type="monotone" dataKey="visas" stroke="#ff8042" name="Visas" />
      </LineChart>
    </ResponsiveContainer>
  )
}

