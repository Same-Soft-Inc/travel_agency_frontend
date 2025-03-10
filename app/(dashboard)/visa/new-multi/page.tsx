import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus } from "lucide-react"

export default function NewMultiVisaPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">New Multi Visa Application</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Multiple Visa Application</CardTitle>
          <CardDescription>Create visa applications for multiple applicants at once.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Visa Details</TabsTrigger>
              <TabsTrigger value="applicants">Applicants</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uae">United Arab Emirates</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="schengen">Schengen Countries</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visaType">Visa Type</Label>
                  <Select>
                    <SelectTrigger id="visaType">
                      <SelectValue placeholder="Select visa type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tourist">Tourist</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="transit">Transit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="processingTime">Processing Time</Label>
                  <Select>
                    <SelectTrigger id="processingTime">
                      <SelectValue placeholder="Select processing time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (7-10 working days)</SelectItem>
                      <SelectItem value="express">Express (3-5 working days)</SelectItem>
                      <SelectItem value="urgent">Urgent (24-48 hours)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="travelDate">Expected Travel Date</Label>
                  <Input id="travelDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="returnDate">Expected Return Date</Label>
                  <Input id="returnDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (Days)</Label>
                  <Input id="duration" type="number" min="1" placeholder="Enter duration" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose of Travel</Label>
                <Textarea id="purpose" placeholder="Enter purpose of travel" />
              </div>
            </TabsContent>

            <TabsContent value="applicants" className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Applicant List</h3>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Applicant
                </Button>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Passport Number</TableHead>
                      <TableHead>Nationality</TableHead>
                      <TableHead>Date of Birth</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                        No applicants added yet. Click "Add Applicant" to begin.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4 pt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Required Documents</Label>
                  <div className="rounded-md border p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Passport Copies</p>
                        <p className="text-sm text-muted-foreground">
                          Clear copy of passport bio page for all applicants
                        </p>
                      </div>
                      <Input type="file" multiple className="w-auto" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Photographs</p>
                        <p className="text-sm text-muted-foreground">Recent passport-sized photographs (35mm x 45mm)</p>
                      </div>
                      <Input type="file" multiple className="w-auto" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Travel Itinerary</p>
                        <p className="text-sm text-muted-foreground">Flight bookings and accommodation details</p>
                      </div>
                      <Input type="file" multiple className="w-auto" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Additional Documents</Label>
                  <div className="rounded-md border p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Supporting Documents</p>
                        <p className="text-sm text-muted-foreground">
                          Any additional documents to support the application
                        </p>
                      </div>
                      <Input type="file" multiple className="w-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit Applications</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

