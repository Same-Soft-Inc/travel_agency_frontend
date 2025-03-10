import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react"

export default function BookingsImportPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Import Booking Lists</h1>
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Import File
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Import Bookings</CardTitle>
          <CardDescription>Upload a CSV or Excel file to import multiple bookings at once.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-10">
            <Upload className="h-10 w-10 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-2">Drag and drop your file here, or click to browse</p>
            <Input type="file" className="max-w-xs" />
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="font-medium">Supported file formats:</p>
            <ul className="list-disc list-inside ml-2">
              <li>CSV (.csv)</li>
              <li>Excel (.xlsx, .xls)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

