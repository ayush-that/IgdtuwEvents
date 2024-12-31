import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { 
  ClerkProvider} from '@clerk/nextjs'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:['400','500','600','700']
});



export const metadata: Metadata = {
  title: "IGDTUW Events",
  icons:{
    icon:'assets/images/image.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
         {children}
      </body>
    </html>
    </ClerkProvider>
  );
}