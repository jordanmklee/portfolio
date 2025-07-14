import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

import { TransitionScript } from "@/components/transition-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jordan Lee - Full Stack Developer",
  description: "Full-stack software developer specializing in UI/UX",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
		<body className={`${inter.className} preload`}>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
				<TransitionScript />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
