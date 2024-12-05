// Code: ImgSelectBtn component
"use client";
import { useRef } from "react";
import { css } from "@/styled-system/css";

import { ImgData } from "@/app/types";
import { getImageInfo } from "@/app/utils";
import ImgSelectBtnSvg from "@/app/components/ImgSelectBtnSvg";

// Define props
type ImgSelectBtnProps = Readonly<{
  image: ImgData | null;
  setImage: React.Dispatch<React.SetStateAction<ImgData | null>>;
  isDisabled?: boolean;
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
  image,
  setImage,
  isDisabled = false,
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

  // inputのファイル選択時に画像情報を取得してstateにセット
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(
      event.target.files ? event.target.files : [],
    ).filter((file) => file && file.type.startsWith("image/"));

    if (files.length === 0) {
      alert("画像ファイルを選択してください");
      return;
    }

    const file = files[0];
    const imgData = await getImageInfo(file);
    setImage(imgData);
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
        <ImgSelectBtnSvg isDisabled={isDisabled} onClick={handleClick} />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={css({
            display: "none",
          })}
        />
      </button>
    </div>
  );
}
