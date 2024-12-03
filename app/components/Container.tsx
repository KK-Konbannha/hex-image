// Code: Container component
import { css } from "@/styled-system/css";

// Define styles
const containerStyle = css.raw({
  padding: "20px",
  backgroundColor: "#ef5350",
  borderRadius: "10px",
  border: "1px solid #ccc",
});

// Define component
export default function Container({
  css: cssProp,
}: Readonly<{ css?: ReturnType<typeof css.raw> }>) {
  return (
    <div className={css(containerStyle, cssProp ? cssProp : css.raw({}))}></div>
  );
}
