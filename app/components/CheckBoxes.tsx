// Code: CheckBoxes component
import { css } from "@/styled-system/css";

// Define styles
const checkBoxesStyle = css.raw({
  display: "flex",
  alignItems: "center",
});

const checkBoxStyle = css.raw({
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
});

// Define component
export default function CheckBoxes({
  css: cssProp,
}: Readonly<{ css?: ReturnType<typeof css.raw> }>) {
  return (
    <div className={css(checkBoxesStyle, cssProp ? cssProp : css.raw({}))}>
      <label className={css(checkBoxStyle)}>
        <input type="checkbox" id="hex_toggle" />
        16進数表記
      </label>
      <label className={css(checkBoxStyle)}>
        <input type="checkbox" id="rgb_toggle" />
        RGB表記
      </label>
    </div>
  );
}
