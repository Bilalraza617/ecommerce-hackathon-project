import Button from "@/components/Button";
import { Images } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-[78.0625rem] px-4 align  pt-[5.5rem] text-xl bg-black text-center flex flex-col justify-between items-center gap-12">
      <div className="text-center flex flex-col justify-between items-center gap-4">
        <div className="text-center h-[16rem]">
          <p className="text-[#909090] leading-8">Pro.Beyond.</p>
          <h2 className="text-white font-thin text-7xl">
            IPhone 14 <br />
            <span className="font-semibold"> Pro</span>
          </h2>
          <p className="text-[#909090]">
            Created to change everything for the <br /> better. For everyone
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
  );
}
