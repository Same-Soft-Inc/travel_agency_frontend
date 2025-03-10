import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewUmrahVisaPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">New Umrah Visa Application</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Umrah Visa Application</CardTitle>
          <CardDescription>Create a new Umrah visa application for pilgrimage to Saudi Arabia.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="applicant" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="applicant">Applicant Details</TabsTrigger>
              <TabsTrigger value="travel">Travel Information</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="applicant" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input id="nationality" placeholder="Enter nationality" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passportNumber">Passport Number</Label>
                  <Input id="passportNumber" placeholder="Enter passport number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passportIssueDate">Passport Issue Date</Label>
                  <Input id="passportIssueDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passportExpiryDate">Passport Expiry Date</Label>
                  <Input id="passportExpiryDate" type="date" required />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="travel" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="travelDate">Expected Travel Date</Label>
                  <Input id="travelDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="returnDate">Expected Return Date</Label>
                  <Input id="returnDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration of Stay (Days)</Label>
                  <Input id="duration" type="number" min="1" placeholder="Enter duration" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accommodation">Accommodation in Saudi Arabia</Label>
                  <Input id="accommodation" placeholder="Enter hotel/accommodation details" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mahramRelation">Mahram Relation (for females)</Label>
                  <Select>
                    <SelectTrigger id="mahramRelation">
                      <SelectValue placeholder="Select relation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="husband">Husband</SelectItem>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="brother">Brother</SelectItem>
                      <SelectItem value="son">Son</SelectItem>
                      <SelectItem value="uncle">Uncle</SelectItem>
                      <SelectItem value="na">Not Applicable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mahramName">Mahram Name (if applicable)</Label>
                  <Input id="mahramName" placeholder="Enter mahram's full name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelPurpose">Purpose of Travel</Label>
                <Textarea id="travelPurpose" placeholder="Details about your Umrah pilgrimage" />
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4 pt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Required Documents</Label>
                  <div className="rounded-md border p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Passport Copy</p>
                        <p className="text-sm text-muted-foreground">Clear copy of passport bio page</p>
                      </div>
                      <Input type="file" className="w-auto" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Photographs</p>
                        <p className="text-sm text-muted-foreground">
                          Recent passport-sized photographs with white background
                        </p>
                      </div>
                      <Input type="file" className="w-auto" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Vaccination Certificate</p>
                        <p className="text-sm text-muted-foreground">Meningitis (ACYW135) vaccination certificate</p>
                      </div>
                      <Input type="file" className="w-auto" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Mahram Proof (if applicable)</p>
                        <p className="text-sm text-muted-foreground">
                          Marriage/birth certificate to prove relationship
                        </p>
                      </div>
                      <Input type="file" className="w-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit Application</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

