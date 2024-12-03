import "./globals.css";
import type { Metadata } from "next";
import { css } from "@/styled-system/css";

export const metadata: Metadata = {
  title: "hex image",
  description: "show hex code of image",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body
        className={css({
          backgroundColor: "#f0f0f0",
          color: "#333",
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
        })}
      >
        <div
          className={css({
            display: "grid",
            gridTemplate: `
            "header header header" 50px
            "...... main   ......" minmax(400px, 640px)
            / 1fr minmax(900px, 1200px) 1fr
          `,
          })}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
