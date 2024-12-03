// Purpose: Define the layout of the application.
import "./globals.css";
import type { Metadata } from "next";
import { css } from "@/styled-system/css";

import Header from "@/app/Header";

// Define styles
const bodyStyle = css.raw({
  backgroundColor: "#f0f0f0",
  color: "#333",
  fontFamily: "Arial, sans-serif",
  margin: 0,
  padding: 0,
});

const wrapperStyle = css.raw({
  display: "grid",
  gridTemplate: `
    "header header header" 50px
    "...... main   ......" minmax(400px, 640px)
    / 1fr minmax(900px, 1200px) 1fr
  `,
});

const headerStyle = css.raw({
  gridArea: "header",
});

const mainStyle = css.raw({
  gridArea: "main",
});

// Define metadata
export const metadata: Metadata = {
  title: "hex image",
  description: "show hex code of image",
};

// Define component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={css(bodyStyle)}>
        <div className={css(wrapperStyle)}>
          <Header css={css.raw(headerStyle)} />

          <main className={css(mainStyle)}>{children}</main>
        </div>
      </body>
    </html>
  );
}
