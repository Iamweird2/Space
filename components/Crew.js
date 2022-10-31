import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Crew({ name, image, role, bio }) {
  const router = useRouter().asPath;
  return (
    <section className="lg:flex-row lg:items-start md:pb-0 lg:mt-[100px] 2xl:mt-[76px] justify-between px-6 sm:px-[38.5px] lg:px-[100px] 2xl:pl-[165px] 2xl:pr-[137px]  w-full mt-[34px] flex flex-col center items-center pb-[54px] uppercase">
      <div className="2xl:relative flex 2xl:pb-0 2xl:h-[683px]  flex-col items-center sm:w-full lg:items-start 2xl:w-[670px]">
        <h2 className="font-barlow 2xl:text-[28px] self-center sm:self-start ">
          {" "}
          <span className="mr-4 font-bold lg:justify-self-start"> 02</span> MEET
          YOUR CREW
        </h2>

        <div className=" md:hidden w-[327px] lg:h-[483px] lg:w-[420px] 2xl:w-[568px] 2xl:self-end 2xl:h-[683px] lg:my-0  h-[327px] my-8 relative  lg:mb-0 2xl:mb-[32px]">
          <Image src={image} alt={name} fill />
        </div>
        <nav className=" lg:justify-self-end lg:bottom-[70px] 2xl:bottom-[94px] lg:absolute md:order-4">
          <ul className="flex flex-row gap-4">
            <Link
              href="/crew"
              className={
                router == "/crew"
                  ? "w-[10px] h-[10px] rounded-full bg-white opacity-100"
                  : "w-[10px] h-[10px] rounded-full bg-white opacity-[0.17]"
              }
            >
              <li></li>
            </Link>
            <Link
              href="/crew/missionSpecialist"
              className={
                router == "/crew/missionSpecialist"
                  ? "w-[10px] h-[10px] rounded-full bg-white opacity-100"
                  : "w-[10px] h-[10px] rounded-full bg-white opacity-[0.17]"
              }
            >
              <li></li>
            </Link>
            <Link
              href="/crew/pilot"
              className={
                router == "/crew/pilot"
                  ? "w-[10px] h-[10px] rounded-full bg-white opacity-100"
                  : "w-[10px] h-[10px] rounded-full bg-white opacity-[0.17]"
              }
            >
              <li></li>
            </Link>
            <Link
              href="/crew/engineer"
              className={
                router == "/crew/engineer"
                  ? "w-[10px] h-[10px] rounded-full bg-white opacity-100"
                  : "w-[10px] h-[10px] rounded-full bg-white opacity-[0.17]"
              }
            >
              <li></li>
            </Link>
          </ul>
        </nav>
        <h3 className="mt-8 mb-2 2xl:text-8 font-bellefair sm:mt-[60px] sm:mb-2 sm:text-[24px] 2xl:mt-[154px] 2xl:mb-[15px]">
          {role}
        </h3>
        <h1 className="text-[24px] 2xl:text-[56px] 2xl:leading-[64px] font-bellefair mb-4 sm:text-[40px] 2xl:mb-[27px]">
          {" "}
          {name}
        </h1>
        <p className="lg:text-start 2xl:text-[18px] 2xl:mb-[0] 2xl:leading-8 2xl:w-[446px] font-barlowreg text-[15px] text-center normal-case sm:w-[430px] sm:mb-[40px] sm:text-4 sm:leading-6">
          {bio}
        </p>
      </div>
      <div className="hidden md:inline-flex w-[327px] lg:h-[483px] lg:w-[420px] 2xl:w-[568px] 2xl:self-end 2xl:h-[683px] lg:my-0  h-[327px] my-8 relative order-1 md:mb-0 2xl:mb-[32px]">
        <Image src={image} alt={name} fill />
      </div>
    </section>
  );
}
