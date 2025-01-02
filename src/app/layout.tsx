import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/providers/react-query-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DMotion - AI Social Media Manager",
  description: "Complete Meta DM & Comments Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {" "}
        <body
          className={`${jakarta.className} antialiased`}
          suppressHydrationWarning
        >
          {" "}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <ReactQueryProvider>
              {children} <Toaster />
            </ReactQueryProvider>
          </ThemeProvider>{" "}
        </body>
      </html>
    </ClerkProvider>
  );
}
