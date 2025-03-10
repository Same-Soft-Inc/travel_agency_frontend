import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingsTable } from "@/components/bookings/bookings-table"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function BookingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
        <Button asChild>
          <Link href="/bookings/new">
            <Plus className="mr-2 h-4 w-4" /> New Booking
          </Link>
        </Button>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="overflow-auto w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="all">All Bookings</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Input placeholder="Search bookings..." className="h-9 w-full sm:w-[250px]" />
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <BookingsTable />
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <BookingsTable status="pending" />
        </TabsContent>
        <TabsContent value="confirmed" className="space-y-4">
          <BookingsTable status="confirmed" />
        </TabsContent>
        <TabsContent value="cancelled" className="space-y-4">
          <BookingsTable status="cancelled" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

