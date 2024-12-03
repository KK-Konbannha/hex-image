// Code: Home page
import { css } from "@/styled-system/css";

import Container from "@/app/components/Container";
import CheckBoxes from "@/app/components/CheckBoxes";
import ColorSelector from "@/app/components/ColorSelector";
import ImgSelectBtn from "@/app/components/ImgSelectBtn";

// Define styles
const wrapperStyle = css.raw({
  backgroundColor: "#f5f5f5",
  display: "grid",
  padding: "20px",
  gridTemplate: `
    "container  container container ... btn" 20fr
    ".......... ......... ......... ... ..." 10px
    "checkboxes ......... selector  ... ..." 1fr
    / 3fr 3fr 3fr 30px 2fr;
  `,
});

const containerStyle = css.raw({
  gridArea: "container",
});

const checkboxesStyle = css.raw({
  gridArea: "checkboxes",
});

const colorSelectorStyle = css.raw({
  gridArea: "selector",
});

const imgSelectBtnStyle = css.raw({
  gridArea: "btn",
});

// Define component
export default function Home() {
  return (
    <div className={css(wrapperStyle)}>
      <Container css={containerStyle} />

      <CheckBoxes css={checkboxesStyle} />
      <ColorSelector css={colorSelectorStyle} />

      <ImgSelectBtn isDisabled={false} width={150} css={imgSelectBtnStyle} />
    </div>
  );
}
