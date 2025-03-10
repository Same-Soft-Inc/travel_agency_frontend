"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Briefcase,
  ChevronDown,
  Home,
  Landmark,
  Maximize2,
  Minimize2,
  Settings,
  Users,
  ViewIcon as Visa,
} from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSidebar } from "@/components/sidebar-context"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent } from "@/components/ui/sheet"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Bookings",
    href: "/bookings",
    icon: Briefcase,
    submenu: [
      { title: "Add Booking", href: "/bookings/new" },
      { title: "Import Booking Lists", href: "/bookings/import" },
      { title: "Search Booking", href: "/bookings/search" },
      { title: "Ticket Cash Receipt", href: "/bookings/cash-receipt" },
      { title: "Manifest", href: "/bookings/manifest" },
      { title: "Quotations", href: "/bookings/quotations" },
      { title: "Manual Invoices", href: "/bookings/manual-invoices" },
    ],
  },
  {
    title: "Visa Applications",
    href: "/visa",
    icon: Visa,
    submenu: [
      { title: "New Visa", href: "/visa/new" },
      { title: "New Multi Visa", href: "/visa/new-multi" },
      { title: "New Umrah Visa", href: "/visa/new-umrah" },
      { title: "Search Visa", href: "/visa/search" },
      { title: "Visa Cash Payment", href: "/visa/cash-payment" },
      { title: "Post Visa Charges", href: "/visa/post-charges" },
      { title: "Post Umrah Visa Charges", href: "/visa/post-umrah-charges" },
      { title: "Visa Collection", href: "/visa/collection" },
      { title: "Manage Visa Types", href: "/visa/types" },
    ],
  },
  {
    title: "Accounting",
    href: "/accounting",
    icon: Landmark,
    submenu: [
      { title: "Post Transactions", href: "/accounting/post-transactions" },
      { title: "Customers", href: "/accounting/customers" },
      { title: "Vendors", href: "/accounting/vendors" },
      { title: "Journal", href: "/accounting/journal" },
      { title: "Post Unearned Revenue", href: "/accounting/unearned-revenue" },
      { title: "Fund Transfer", href: "/accounting/fund-transfer" },
      { title: "Post Income", href: "/accounting/post-income" },
      { title: "Expenses", href: "/accounting/expenses" },
      { title: "Asset", href: "/accounting/asset" },
      { title: "Capital", href: "/accounting/capital" },
      { title: "Entry Closing", href: "/accounting/entry-closing" },
      { title: "Divide Retained Earning", href: "/accounting/retained-earning" },
    ],
  },
  {
    title: "HR Management",
    href: "/hrm",
    icon: Users,
    submenu: [
      { title: "Employee List", href: "/hrm/employee-list" },
      { title: "New Employee", href: "/hrm/new-employee" },
      { title: "Manage Employee Titles", href: "/hrm/employee-titles" },
      { title: "Employee Advance", href: "/hrm/employee-advance" },
      { title: "Employee Bonus", href: "/hrm/employee-bonus" },
      { title: "Employee Deduction", href: "/hrm/employee-deduction" },
      { title: "Post Salary", href: "/hrm/post-salary" },
      { title: "Salary Payment", href: "/hrm/salary-payment" },
      { title: "Employee Statement", href: "/hrm/employee-statement" },
      { title: "Attendance Summary Report", href: "/hrm/attendance-report" },
      { title: "Attendance Devices", href: "/hrm/attendance-devices" },
      { title: "Attendance Settings", href: "/hrm/attendance-settings" },
    ],
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
    submenu: [
      { title: "Booking Reports", href: "/reports/booking" },
      { title: "Ticket Ledger", href: "/reports/ticket-ledger" },
      { title: "Cashier Statement", href: "/reports/cashier-statement" },
      { title: "View Report", href: "/reports/view" },
      { title: "Umrah Visa Report", href: "/reports/umrah-visa" },
      { title: "Show Ledger", href: "/reports/show-ledger" },
      { title: "Expense", href: "/reports/expense" },
      { title: "Account Statement", href: "/reports/account-statement" },
      { title: "Receipt Vouchers", href: "/reports/receipt-vouchers" },
      { title: "Payment Vouchers", href: "/reports/payment-vouchers" },
      { title: "CashFlow Statement", href: "/reports/cashflow" },
      { title: "Income Statement", href: "/reports/income" },
      { title: "Balance Sheet", href: "/reports/balance-sheet" },
      { title: "Trial Balance", href: "/reports/trial-balance" },
    ],
  },
  {
    title: "Administrator",
    href: "/admin",
    icon: Settings,
    submenu: [
      { title: "Route Management", href: "/admin/route-management" },
      { title: "Manage Carriers", href: "/admin/carriers" },
      { title: "Agent Setup", href: "/admin/agent-setup" },
      { title: "Users", href: "/admin/users" },
      { title: "New User", href: "/admin/new-user" },
      { title: "User Access", href: "/admin/user-access" },
      { title: "Settings", href: "/admin/settings" },
      { title: "Manage Cash/Bank Accounts", href: "/admin/accounts" },
      { title: "Chart Of Accounts", href: "/admin/chart-of-accounts" },
      { title: "Manage Income Accounts", href: "/admin/income-accounts" },
      { title: "Manage Expense Accounts", href: "/admin/expense-accounts" },
      { title: "Manage Capital Accounts", href: "/admin/capital-accounts" },
      { title: "System Transaction Logs", href: "/admin/transaction-logs" },
    ],
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})
  const { state, toggle, mobileOpen, setMobileOpen } = useSidebar()
  const isCollapsed = state === "collapsed"

  // Close mobile sidebar when route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname, setMobileOpen])

  const toggleSubmenu = (title: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isCollapsed) return

    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setMobileOpen(false)
    router.push(href)
  }

  // Function to render the sidebar content
  const renderSidebarContent = () => (
    <div className="py-2">
      {!isCollapsed && <h2 className="px-4 text-lg font-semibold tracking-tight">Main Menu</h2>}
      <div className="mt-3 space-y-1">
        <TooltipProvider delayDuration={0}>
          {sidebarNavItems.map((item) => (
            <div key={item.href} className="space-y-1">
              {isCollapsed ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-center",
                        pathname === item.href
                          ? "bg-secondary text-secondary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground",
                      )}
                      size="icon"
                      onClick={(e) => handleNavigation(item.href, e)}
                    >
                      <item.icon className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.title}</TooltipContent>
                </Tooltip>
              ) : (
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href
                      ? "bg-secondary text-secondary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground",
                  )}
                  onClick={(e) => {
                    if (item.submenu) {
                      toggleSubmenu(item.title, e)
                    } else {
                      handleNavigation(item.href, e)
                    }
                  }}
                >
                  {item.submenu ? (
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </div>
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", openSubmenus[item.title] ? "rotate-180" : "")}
                      />
                    </div>
                  ) : (
                    <>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </>
                  )}
                </Button>
              )}

              {!isCollapsed && item.submenu && openSubmenus[item.title] && (
                <div className="ml-6 space-y-1 pt-1">
                  {item.submenu.map((subItem) => (
                    <Button
                      key={subItem.href}
                      variant={pathname === subItem.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        pathname === subItem.href
                          ? "bg-secondary text-secondary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground",
                      )}
                      size="sm"
                      onClick={(e) => handleNavigation(subItem.href, e)}
                    >
                      {subItem.title}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </TooltipProvider>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-[80%] max-w-[300px] p-0 sm:max-w-sm">
          <div className="flex h-16 items-center border-b px-4">
            <span className="text-lg font-bold">Samesoft Travel Agency</span>
          </div>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="flex flex-col gap-2 p-4">{renderSidebarContent()}</div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="relative hidden border-r bg-background md:block">
        <div className={cn("transition-all duration-300 ease-in-out", isCollapsed ? "w-[4.5rem]" : "w-64")}>
          <div className="absolute right-0 top-3 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full -mr-3 bg-background border shadow-sm"
              onClick={toggle}
            >
              {isCollapsed ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="flex flex-col gap-2 p-4">{renderSidebarContent()}</div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

