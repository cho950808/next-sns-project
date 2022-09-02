import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LOG_OUT_REQUEST } from "../../reducers/user";

export default function Header() {
  const dispatch = useDispatch();
  const { me } = useSelector((state: any) => state.user);

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    Router.push("/login");
  }, []);

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
            {!me ? (
              <Link href="/login">Login</Link>
            ) : (
              <button className="text-blue-400" onClick={onLogout}>
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
