import type { Metadata } from "next";
import SocketProvider from "@/components/SocketProvider";
import ThemeRegistry from "@/components/ThemeRegistry";
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
          <ThemeRegistry>
            <Header />
            {children}
          </ThemeRegistry>
        </SocketProvider>
      </body>
    </html>
  );
};

