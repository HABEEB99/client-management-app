import { ThemeProvider } from "next-themes";

import { Footer, Header, Providers } from "@/components";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Client Management",
  description: "A Client Management App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen min-h-screen overflow-x-hidden`}
      >
        <Providers>
          <Header />
          <main className="w-full min-h-[85vh]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
