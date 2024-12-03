// Code: ImgSelectBtn component
"use client";
import { useRef } from "react";
import { css } from "@/styled-system/css";

import ImgSelectBtnSvg from "@/app/components/ImgSelectBtnSvg";

// Define props
type ImgSelectBtnProps = Readonly<{
  isDisabled?: boolean;
  width?: number;
  css?: ReturnType<typeof css.raw>;
}>;

// Define styles
const imgSelectBtnStyle = css.raw({
  padding: "0.05rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "2rem",
  transition: ".3s",
});

// Define component
export default function ImgSelectBtn({
  isDisabled = false,
  width = 150,
  css: cssProp,
}: ImgSelectBtnProps) {
  // ファイル選択ボタンの参照を作成
  const fileInputRef = useRef<HTMLInputElement>(null);

  // svg要素をクリックした時にファイル選択ボタンをクリックする
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={css(cssProp)}>
      <button
        disabled={isDisabled}
        className={css(
          imgSelectBtnStyle,
          css.raw({
            _hover: {
              backgroundColor: isDisabled
                ? "rgba(0,0,0,0)"
                : "rgba(0,0,0,0.03)",
            },
            _disabled: {
              cursor: "default",
              backgroundColor: "rgba(0,0,0,0)",
            },
            "&_clicked": {
              backgroundColor: isDisabled
                ? "rgba(0,0,0,0)"
                : "rgba(0,0,0,0.03)",
            },
          }),
        )}
      >
        <ImgSelectBtnSvg
          isDisabled={isDisabled}
          width={width}
          onClick={handleClick}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className={css({
            display: "none",
          })}
        />
      </button>
    </div>
  );
}
