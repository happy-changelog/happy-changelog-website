import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export const metadata = {
  title: "Happy Changelog",
  description:
    "An open workflow framework for managing changelogs through pull request descriptions",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-2 items-center text-xl font-bold">
                  <Sparkles className="h-6 w-6 text-happy-500 animate-pulse-gentle" />
                  <span className="text-gradient">Happy Changelog</span>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <Navigation />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="w-full border-t py-6 md:py-0 bg-gradient-to-r from-happy-50 to-lavender-50 dark:from-happy-900/30 dark:to-lavender-900/30 dark:border-happy-800">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex gap-2 items-center text-lg font-semibold">
                  <Sparkles className="h-5 w-5 text-happy-500 dark:text-happy-400" />
                  <span className="text-gradient">Happy Changelog</span>
                </div>
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Happy Changelog is an open workflow framework. Feel free to
                  adapt and implement it in your projects.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
