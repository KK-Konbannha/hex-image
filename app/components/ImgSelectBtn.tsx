// Code: ImgSelectBtn component
import { css } from "@/styled-system/css";

// Define styles
const imgSelectBtnStyle = css.raw({
  cursor: "pointer",
  backgroundColor: "#333",
});

// Define component
export default function ImgSelectBtn({
  css: cssProp,
}: Readonly<{ css?: ReturnType<typeof css.raw> }>) {
  return (
    <button
      className={css(imgSelectBtnStyle, cssProp ? cssProp : css.raw({}))}
    ></button>
  );
}
