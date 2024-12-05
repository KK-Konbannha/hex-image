import { ImgData } from "@/app/types";

export const getImageInfo = (file: File): Promise<ImgData> =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img: HTMLImageElement = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        resolve({
          src: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };
    reader.readAsDataURL(file);
  });
