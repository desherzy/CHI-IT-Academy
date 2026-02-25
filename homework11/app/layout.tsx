import type { Metadata } from "next";
import SocketProvider from "@/components/SocketProvider";
import AppThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CHI IT Homework 11",
  description: "Exhibits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SocketProvider>
          <AppThemeProvider>
            <Header />
            {children}
          </AppThemeProvider>
        </SocketProvider>
      </body>
    </html>
  );
};

