// Code: Header component
import { css } from "@/styled-system/css";

// Define styles
const headerStyle = css.raw({
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const headerTextStyle = css.raw({
  margin: 0,
  fontSize: "1.5rem",
  fontWeight: "bold",
});

// Define component
export default function Header({
  css: cssProp,
}: Readonly<{ css?: ReturnType<typeof css.raw> }>) {
  return (
    <header className={css(headerStyle, cssProp ? cssProp : css.raw({}))}>
      <h1 className={css(headerTextStyle)}>hex-image</h1>
    </header>
  );
}
