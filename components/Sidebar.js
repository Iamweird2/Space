import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../states/sidebarSlice";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter().asPath;
  const sidebar = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  console.log(router);
  return sidebar ? (
    <div className="z-10 h-screen overflow-hidden sm:hidden  absolute top-0 right-0 flex  w-[70%]  flex-col gap-20 pl-7 py-8 text-white bg-sideBar backdrop-blur-2xl">
      <div
        className="relative self-end w-6 h-6 mr-[26.45px]"
        onClick={() => dispatch(toggle())}
      >
        <Image src="/assets/shared/icon-close.svg" alt="close menu" fill />
      </div>
      <nav className="flex flex-col list-none gap-7">
        <Link
          href="/"
          onClick={() => {
            dispatch(toggle());
          }}
          className={router == "/" ? "border-r-4 border-white" : "null"}
        >
          <li>
            <span className="mr-3 text-lg font-bold">00</span> HOME
          </li>
        </Link>
        <Link
          href="/crew"
          onClick={() => {
            dispatch(toggle());
          }}
          className={router == "/crew" ? "border-r-4 border-white" : "null"}
        >
          <li>
            <span className="mr-3 text-lg font-bold">00</span>CREW
          </li>
        </Link>
        <Link
          href="destination"
          onClick={() => {
            dispatch(toggle());
          }}
          className={
            router == "/destination" ? "border-r-4 border-white" : "null"
          }
        >
          <li>
            <span className="mr-3 text-lg font-bold">00</span> DESTINATION
          </li>
        </Link>
        <Link
          href="/technology"
          onClick={() => {
            dispatch(toggle());
          }}
          className={
            router == "/technology" ? "border-r-4 border-white" : "null"
          }
        >
          <li>
            <span className="mr-3 text-lg font-bold">00</span> TECHNOLOGY
          </li>
        </Link>
      </nav>
    </div>
  ) : null;
}
