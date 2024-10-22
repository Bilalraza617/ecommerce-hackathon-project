"use client";

import { Logos } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { PiShoppingCartThin } from "react-icons/pi";
import { useState } from "react";
const data: string[] = ["Home", "About", "Contact Us", "Blog"];

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => setIsClick(!isClick);

  return (
    <header className="md:max-w-[70%] px-4 py-6 flex items-center justify-between m-auto ">
      <Image src={Logos.Logo} alt="logo" />

      <div className="hidden md:block">
        <div className="flex items-center">
          <CiSearch />
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            {data.map((val, index) => (
              <Link key={index} href={val.toLowerCase()}>
                {val}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <IoIosHeartEmpty />
          <PiShoppingCartThin />
          <RxPerson />
        </div>
      </div>

      <button onClick={toggleNavbar} className="md:hidden">
        <Image src={Logos.Burger} alt="burger-icon" className="w-10" />
      </button>
    </header>
  );
};

export default Header;
