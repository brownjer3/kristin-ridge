import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Kristin Ridge | Architect → Project Manager & Documentation Specialist",
  description:
    "7+ years at Studio Gang, COOKFOX, and DLR Group. Seeking to transition expertise in BIM/Revit documentation and project coordination to tech-focused roles in project management and technical documentation.",
  keywords: [
    "Kristin Ridge",
    "architect to tech",
    "BIM specialist",
    "Revit expert",
    "project manager",
    "technical documentation",
    "Studio Gang",
    "COOKFOX Architects",
    "DLR Group",
    "Chicago architect",
    "career transition",
    "construction administration",
  ],
  authors: [{ name: "Kristin Ridge" }],
  openGraph: {
    title:
      "Kristin Ridge | Architect → Project Manager & Documentation Specialist",
    description:
      "7+ years at Studio Gang, COOKFOX, and DLR Group. Seeking to transition expertise in BIM/Revit documentation and project coordination to tech-focused roles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
