"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, LogOut, Menu, Search, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ModeToggle } from "../mode-toggle"
import { useSidebar } from "@/components/sidebar-context"
import { useToast } from "@/components/ui/use-toast"

export function DashboardHeader() {
  const { mobileOpen, setMobileOpen } = useSidebar()
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens here
    // For example: localStorage.removeItem("authToken")

    // Show logout toast
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    })

    // Redirect to login page
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Button variant="outline" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      <Link href="/dashboard" className="hidden items-center gap-2 md:flex">
        <span className="text-xl font-bold">Samesoft Travel Agency</span>
      </Link>
      <div className="flex flex-1 items-center gap-4 md:gap-6">
        <form className="hidden flex-1 md:flex">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md border border-input bg-background pl-8 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </form>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
            <span className="sr-only">Notifications</span>
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

