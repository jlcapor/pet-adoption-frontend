import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import SessionWrapper from "@/app/SessionWrapper";
import { cn } from "@/lib/utils"
import { fontHeading } from "@/lib/fonts";
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Viewport } from "next";
import { TailwindIndicator } from "@/components/tailwind-indicator";


export const metadata = {
  title:{
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: "Generated by create-t3-app",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
      <html lang="en" suppressHydrationWarning>
        <body 
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            GeistSans.variable,
            GeistMono.variable,
            fontHeading.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TRPCReactProvider>{children}</TRPCReactProvider>
            <TailwindIndicator />
          </ThemeProvider>
          
        <ToastContainer
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
        </body>
      </html>
    </SessionWrapper>
  );
}
