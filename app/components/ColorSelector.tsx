// Code: ColorSelector component
import { css } from "@/styled-system/css";

// Define styles
const colorSelectorStyle = css.raw({
  marginRight: "20px",
});

// Define component
export default function ColorSelector({
  css: cssProp,
}: Readonly<{ css?: ReturnType<typeof css.raw> }>) {
  return (
    <select
      className={css(colorSelectorStyle, cssProp ? cssProp : css.raw({}))}
      disabled
    >
      <option value="Gray">グレースケール</option>
      <option value="Red">赤</option>
      <option value="Green">緑</option>
      <option value="Blue">青</option>
    </select>
  );
}
