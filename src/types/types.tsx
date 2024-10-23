import { StaticImageData } from "next/image";

export interface ButtonPropsTypes {
  text: string;
  bg: string;
  width: number;
  text_color: string;
  border_color: string;
}

export interface BannerImagePropes {
  image: StaticImageData;
  title: string;
  des: string;
  bg: string | number;
  width: number;
  hieght: number;
}
