"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    present: 95,
    absent: 5,
  },
  {
    name: "Feb",
    present: 93,
    absent: 7,
  },
  {
    name: "Mar",
    present: 98,
    absent: 2,
  },
  {
    name: "Apr",
    present: 92,
    absent: 8,
  },
  {
    name: "May",
    present: 96,
    absent: 4,
  },
  {
    name: "Jun",
    present: 94,
    absent: 6,
  },
]

export function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="present" fill="#8884d8" name="Present %" />
        <Bar dataKey="absent" fill="#82ca9d" name="Absent %" />
      </BarChart>
    </ResponsiveContainer>
  )
}

