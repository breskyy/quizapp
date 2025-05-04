"use client"

import { useState, useEffect } from "react"

// Update this version number when you make changes
const APP_VERSION = "1.0.19"

export function VersionIndicator() {
  const [buildTime, setBuildTime] = useState<string>("")

  useEffect(() => {
    // This will be replaced with the actual build time during build
    setBuildTime(new Date().toISOString())
  }, [])

  return (
    <div className="text-xs text-gray-500 fixed bottom-2 right-2 opacity-70 hover:opacity-100">
      <p>Version: {APP_VERSION}</p>
      <p>Build: {buildTime.substring(0, 10)}</p>
    </div>
  )
}
