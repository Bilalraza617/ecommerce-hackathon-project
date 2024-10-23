import { BannerImagePropes } from "@/types/types";
import { Images } from "@/constants";
import Image from "next/image";
import React from "react";

const data: BannerImagePropes[] = [
  {
    title: "Apple  AirPods Max",
    des: "Computational audio. Listen, it's powerful",
    bg: "#EDEDED",
    image: Images.air_pords,
    width: 192,
    hieght: 200,
  },
  {
    title: "Apple Vision Pro",
    des: "An immersive way to experience entertainment",
    bg: "#353535",
    image: Images.app_ver,
    width: 325.87,
    hieght: 192.44,
  },
  {
    title: "Playstation 5",
    des: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    bg: "white",
    image: Images.play,
    width: 200,
    hieght: 200,
  },
  {
    title: "Macbook Air",
    des: "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
    bg: "#EDEDED",
    image: Images.hero_banner,
    width: 222.97,
    hieght: 152.95,
  },
];

const BannerImage = () => {
  return (
    <div className="flex flex-col items-center">
      {data.map((item, index) => (
        <div
          key={index}
          className={`bg-[${item.bg}]  flex flex-col justify-center items-center h-[23.5rem] w-full`}
        >
          <Image
            src={item.image}
            width={item.width}
            height={item.hieght}
            alt="image"
          />
          <h2>{item.title}</h2>
          <p>{item.des}</p>
        </div>
      ))}
    </div>
  );
};

export default BannerImage;
