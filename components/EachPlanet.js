import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function EachPlanet({
  name,
  image,
  description,
  distance,
  travel,
  planet1,
  planet2,
  planet3,
  planet4,
}) {
  const router = useRouter();
  return (
    <section className="lg:flex lg:flex-row lg:px-[163px] lg:justify-between 2xl:mb-[97px] 2xl:items-end font-barlowreg flex flex-col justify-center w-full px-6  py-[34px] lg:py-[90px] 2xl:py-[76px] text-center lg:text-left">
      <Head>
        <title> Space | Destination</title>
      </Head>
      <>
        <div>
          <h2 className="mb-8 2xl:mb-[64px] lg:text-[28px] uppercase">
            <span className="mr-[18px] lg:mr-[28px] text-opacity-25 font-bold ">
              01
            </span>{" "}
            pick your destination
          </h2>
          <div className="relative w-[172px] h-[172px] lg:w-[300px] 2xl:w-[445px] lg:h-[300px] 2xl:h-[445px] 2xl:ml-[37.5px] 2xl:mb-0 mx-auto mb-[26px]">
            <Image src={image} alt={name} fill />
          </div>
        </div>
        <div className=" lg:w-[445px]">
          <nav className="mb-[20px] 2xl:mb-[52px]">
            <ul className="text-[14px] lg:text-[16px] flex flex-row justify-center lg:justify-start gap-3 lg:gap-9 mx-auto list-none">
              <Link
                href="/destination"
                className={
                  router.pathname == "/destination"
                    ? "border-b-2 border-white pb-2"
                    : "text-white pb-2"
                }
              >
                {" "}
                <li>{planet1}</li>
              </Link>
              <Link
                href="/destination/mars"
                className={
                  router.asPath == "/destination/mars"
                    ? "border-b-2 border-white pb-2"
                    : "text-white pb-2"
                }
              >
                <li>{planet2}</li>{" "}
              </Link>
              <Link
                href="/destination/europa"
                className={
                  router.asPath == "/destination/europa"
                    ? "border-b-2 border-white pb-2"
                    : "text-white pb-2"
                }
              >
                <li>{planet3}</li>{" "}
              </Link>
              <Link
                href="/destination/titan"
                className={
                  router.asPath == "/destination/titan"
                    ? "border-b-2 border-white pb-2"
                    : "text-white pb-2"
                }
              >
                <li>{planet4}</li>{" "}
              </Link>
            </ul>
          </nav>
          <h1 className="font-bellefair text-[56px] uppercase 2xl:text-[100px] 2xl:leading-[114px]">
            {name}
          </h1>
          <p className="text-[15px] 2xl:text-[18px] 2xl:leading-8">
            {description}
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-10  xl:gap-[79px] lg:pt-[38px] w-full gap-8 pt-8 mt-8 2xl:mt-[54px] border-t-2 border-solid border-slate-600">
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px]">AVG. DISTANCE</h4>
              <p className="font-bellefair text-[28px] uppercase">{distance}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px]">Est. travel time</h4>
              <p className="font-bellefair text-[28px] uppercase">{travel}</p>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
