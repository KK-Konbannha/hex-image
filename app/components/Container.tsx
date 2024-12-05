// Code: Container component
"use client";
import { useState } from "react";
import NextImage from "next/image";

import { css } from "@/styled-system/css";

import { getImageInfo } from "@/app/utils";
import { ImgData } from "@/app/types";

// Define styles
const containerStyle = css.raw({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
});

// Define component
export default function Container({
  image,
  css: cssProp,
  setImage,
}: Readonly<{
  image: ImgData | null;
  css?: ReturnType<typeof css.raw>;
  setImage: React.Dispatch<React.SetStateAction<ImgData | null>>;
}>) {
  // stateでドラッグオーバー状態を管理
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const onDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files).filter(
      (file) => file && file.type.startsWith("image/"),
    );

    setIsDragOver(false);

    if (files.length === 0) {
      alert("画像ファイルをドラッグ＆ドロップしてください");
      return;
    } else if (files.length > 1) {
      alert("画像ファイルは1つだけ選択してください");
      return;
    }
    const newImage = await getImageInfo(files[0]);
    setImage(newImage);
  };

  return (
    <div
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={css(
        containerStyle,
        css.raw({
          backgroundColor: isDragOver ? "rgba(0, 183, 88, 0.8)" : "#fff",
        }),
        cssProp ? cssProp : css.raw({}),
      )}
    >
      {image ? (
        <NextImage
          src={image.src}
          alt="アップロードされた画像"
          width={image.width}
          height={image.height}
        />
      ) : (
        <p className={css({ "& span": { display: "inline-block" } })}>
          <span>ここに</span>
          <span>画像を</span>
          <span>ドラッグ＆ドロップして</span>
          <span>ください</span>
        </p>
      )}
    </div>
  );
}
