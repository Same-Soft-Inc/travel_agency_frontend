import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "@/components/reports/revenue-chart"
import { BookingsTrendChart } from "@/components/reports/bookings-trend-chart"
import { DestinationChart } from "@/components/reports/destination-chart"
import { Download } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export Reports
        </Button>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="destinations">Destinations</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue breakdown for the current year.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Destinations</CardTitle>
                <CardDescription>Most popular travel destinations.</CardDescription>
              </CardHeader>
              <CardContent>
                <DestinationChart />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Trends</CardTitle>
              <CardDescription>Monthly booking trends for different services.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <BookingsTrendChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

