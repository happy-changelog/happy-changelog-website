import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Happy Changelog",
  description: "An open workflow framework for managing changelogs through pull request descriptions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'