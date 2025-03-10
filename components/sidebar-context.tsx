"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type SidebarState = "expanded" | "collapsed"

type SidebarContextType = {
  state: SidebarState
  toggle: () => void
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

const SIDEBAR_COOKIE_NAME = "safari-sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SidebarState>("expanded")
  const [mobileOpen, setMobileOpen] = useState(false)

  // Load the sidebar state from cookie on mount
  useEffect(() => {
    const cookies = document.cookie.split(";")
    const sidebarCookie = cookies.find((cookie) => cookie.trim().startsWith(`${SIDEBAR_COOKIE_NAME}=`))

    if (sidebarCookie) {
      const sidebarState = sidebarCookie.split("=")[1].trim()
      if (sidebarState === "collapsed") {
        setState("collapsed")
      }
    }
  }, [])

  const toggle = () => {
    const newState = state === "expanded" ? "collapsed" : "expanded"
    setState(newState)

    // Save the state to a cookie
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${newState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
  }

  return (
    <SidebarContext.Provider value={{ state, toggle, mobileOpen, setMobileOpen }}>{children}</SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

