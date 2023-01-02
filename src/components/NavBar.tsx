import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import MyDropdown from "../components/DropDown";
import Loginwith from "../components/Login";
import DropDownLogin from "../components/DropDownLogin";
import souvla from "/images/xsushi-sign.png";
import Link from "next/link";
function NavBar() {
  const { data: session, status } = useSession();
  return (
    <nav className="h flex h-7v w-full flex-wrap items-center justify-between bg-stone-800 p-2 ">
      <div className=" h-7v items-start">
        <Link href="/">
          <Image
            src={souvla}
            alt="Logo"
            width="45"
            height="30"
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </div>
      {/* 
      <div className="  items-start">
        <MyDropdown />
      </div> */}

      <div className="item-start flex h-7v pt-2 ">
        <MyDropdown />
      </div>
      <div className="item-start flex h-7v pt-2 ">
        <DropDownLogin />
      </div>
    </nav>
  );
}

export default NavBar;
