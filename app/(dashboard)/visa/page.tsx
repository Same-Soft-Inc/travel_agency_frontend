import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VisaApplicationsTable } from "@/components/visa/visa-applications-table"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function VisaApplicationsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Visa Applications</h1>
        <Button asChild>
          <Link href="/visa/new">
            <Plus className="mr-2 h-4 w-4" /> New Application
          </Link>
        </Button>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Applications</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Input placeholder="Search applications..." className="h-9 w-[250px]" />
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <VisaApplicationsTable />
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <VisaApplicationsTable status="pending" />
        </TabsContent>
        <TabsContent value="approved" className="space-y-4">
          <VisaApplicationsTable status="approved" />
        </TabsContent>
        <TabsContent value="rejected" className="space-y-4">
          <VisaApplicationsTable status="rejected" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

