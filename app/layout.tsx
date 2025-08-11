import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kristin Ridge | Architecture & Design Portfolio",
  description:
    "Experienced architect transitioning to tech, specializing in documentation, project management, and cross-functional collaboration.",
  keywords: [
    "architect",
    "technical writer",
    "project manager",
    "UX design",
    "documentation",
    "tech transition",
  ],
  authors: [{ name: "Kristin Ridge" }],
  openGraph: {
    title: "Kristin Ridge | Architecture & Design Portfolio",
    description:
      "Experienced architect transitioning to tech, specializing in documentation, project management, and cross-functional collaboration.",
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
