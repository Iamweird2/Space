import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../states/SidebarSlice";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-between px-7 sm:pr-0 pt-8 sm:pt-0 md:pl-[39px] 2xl:pt-[40px] 2xl:pl-[55px]">
      <div className="relative w-9 h-9 md:w-12 md:h-12 sm:w-14 sm:h-14">
        <Image src="/assets/shared/logo.svg" alt="logo" fill />
      </div>
      <div className="" onClick={() => dispatch(toggle())}>
        <div className="relative w-6 h-6 sm:hidden ">
          <Image src="/assets/shared/icon-hamburger.svg" alt="menu" fill />
        </div>
      </div>
      <div className="hidden 2xl:inline-block w-[473px] h-[1px] translate-x-10 z-[2] bg-white"></div>
      <nav className="basis-[70%] lg:basis-[60%] hidden sm:inline-block text-[14px] 2xl:text-[16px] 2xl:leading-[19px] font-barlow bg-sideBar backdrop-blur-2xl">
        <ul className="flex flex-row justify-around">
          <Link
            href="/"
            className={
              router.pathname == "/"
                ? "py-[39px] border-b-4 border-white"
                : "py-[39px] border-b-4 border-transparent hover:border-white"
            }
          >
            <li>
              <span className="hidden 2xl:inline-block text-[16px] font-bold font-barlow mr-[11px]">
                {" "}
                00{" "}
              </span>
              HOME
            </li>
          </Link>
          <Link
            href="/destination"
            className={
              router.pathname.includes("/destination")
                ? "py-[39px] border-b-4 border-white"
                : "py-[39px] border-b-4 border-transparent hover:border-white"
            }
          >
            <li>
              {" "}
              <span className="hidden 2xl:inline-block text-[16px] font-bold font-barlow mr-[11px]">
                {" "}
                01{" "}
              </span>
              DESTINATION
            </li>
          </Link>
          <Link
            href="/crew"
            className={
              router.pathname.includes("/crew")
                ? "py-[39px] border-b-4 border-white"
                : "py-[39px] border-b-4 border-transparent hover:border-white"
            }
          >
            <li>
              {" "}
              <span className="hidden 2xl:inline-block text-[16px] font-bold font-barlow mr-[11px]">
                {" "}
                02{" "}
              </span>
              CREW
            </li>
          </Link>
          <Link
            href="/technology"
            className={
              router.pathname.includes("/technology")
                ? "py-[39px] border-b-4 border-white"
                : "py-[39px] border-b-4 border-transparent hover:border-white"
            }
          >
            <li>
              <span className="hidden 2xl:inline-block text-[16px] font-bold font-barlow mr-[11px]">
                {" "}
                03{" "}
              </span>
              TECHNOLOGY
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
