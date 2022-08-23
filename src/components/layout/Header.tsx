import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  return (
    <div className="fixed z-50 bg-white w-full drop-shadow-md">
      <div className="container">
        <div className="flex justify-center lg:justify-between items-center h-[90px]">
          <div className="h-[50px] w-[50px] bg-red-200">
            <Link href="/">
              {/* <img
                // src="/images/logo/logo-with_text.png"
                className="w-[200px] cursor-pointer"
              /> */}
              <h1 className="flex w-full h-full cursor-pointer items-center justify-center">
                로고
              </h1>
            </Link>
          </div>
          <div className="header-menu-wrap hidden lg:block space-x-5">
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
