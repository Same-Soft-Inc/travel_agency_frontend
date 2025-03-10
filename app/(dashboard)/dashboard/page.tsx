import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentBookings } from "@/components/dashboard/recent-bookings";
import { VisaGrowthChart } from "@/components/dashboard/visa-growth-chart";
import { TopVisaCountriesChart } from "@/components/dashboard/top-visa-countries-chart";
import { RequestedVisasChart } from "@/components/dashboard/requested-visas-chart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Visa Growth by Month</CardTitle>
            <CardDescription>
              Monthly visa application growth for the current year
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <VisaGrowthChart />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Top Visa Countries</CardTitle>
            <CardDescription>Most popular visa destinations</CardDescription>
          </CardHeader>
          <CardContent>
            <TopVisaCountriesChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Most Requested Visas</CardTitle>
            <CardDescription>
              Popular visa types by request volume
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RequestedVisasChart />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest customer bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentBookings />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
