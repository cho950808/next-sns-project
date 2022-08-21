import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  return (
    <div className="fixed z-50 bg-white w-full drop-shadow-md">
      <div className="container">
        <div className="flex justify-center lg:justify-between items-center h-[90px]">
          <div>
            <Link href="/">
              <img
                src="/images/logo/logo-with_text.png"
                className="w-[200px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="header-menu-wrap hidden lg:block">
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
