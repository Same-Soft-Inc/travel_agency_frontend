"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoonIcon, SunIcon } from "lucide-react"

export function ThemeTest() {
  const { theme, setTheme } = useTheme()

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Theme Test</CardTitle>
        <CardDescription>
          Current theme: <span className="font-bold">{theme}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            The dark theme background should be a deep blue color (#09122C).
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={() => setTheme("light")} className="flex items-center gap-2">
              <SunIcon className="h-4 w-4" />
              Light Mode
            </Button>
            <Button variant="outline" onClick={() => setTheme("dark")} className="flex items-center gap-2">
              <MoonIcon className="h-4 w-4" />
              Dark Mode
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md border p-4">
            <h3 className="font-medium mb-2">Background</h3>
            <div className="h-10 w-full bg-background rounded-md border"></div>
          </div>
          <div className="rounded-md border p-4">
            <h3 className="font-medium mb-2">Card</h3>
            <div className="h-10 w-full bg-card rounded-md border"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

