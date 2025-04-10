import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// // Use next/font/google for your Material Symbols font too
// import { Material_Symbols_Outlined } from "next/font/google";

// const materialSymbols = Material_Symbols_Outlined({
//   subsets: ["latin"],
//   display: "optional",
//   // Include necessary variants for Material Symbols
//   axes: ["FILL", "GRAD", "opsz", "wght"],
// });

const inter = Inter({
  subsets: ["latin"],
  display: "optional", // Add display parameter
});

export const metadata: Metadata = {
  title: "Enterprise AI Gateway",
  description: "Deploy, secure, and scale your enterprise AI infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* The Font Awesome CDN link can remain as is */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          // crossorigin="anonymous"
          // referrerpolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
