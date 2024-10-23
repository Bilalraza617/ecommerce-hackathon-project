import BannerImage from "@/components/BannerImage";
import Button from "@/components/Button";
import { Images } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="px-4 align  pt-[5.5rem] text-xl bg-black text-center flex flex-col justify-between items-center  gap-12">
        <div className="text-center flex flex-col justify-between items-center gap-8 ">
          <div className="text-center ">
            <p className="text-[#909090] ">Pro.Beyond.</p>
            <h2 className="text-white font-thin text-7xl mt-3">
              IPhone 14 <br />
              <span className="font-semibold"> Pro</span>
            </h2>
            <p className="text-[#909090] text-[19px] mt-4 ">
              Created to change everything for the better. For everyone
            </p>
          </div>
          <Button
            text="Shop Now"
            width={11.9375}
            bg="black"
            border_color="white"
            text_color="white"
          />
        </div>
        <div>
          <Image src={Images.hero_banner} alt="image" />
        </div>
      </div>
      {/* ------------------------- */}
      <div>
        <BannerImage />
      </div>
      <div className="bg-[#EDEDED] text-center">
        <Button
          text="Shop Now"
          width={28}
          bg="black"
          border_color="white"
          text_color="white"
        />
      </div>
    </div>
  );
}
