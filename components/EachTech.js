import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function EachTech({
  name,
  imagePortrait,
  imageLandscape,
  description,
  tech1,
  tech2,
  tech3,
}) {
  const router = useRouter().asPath;
  return (
    <section className=" lg:pr-0 lg:pl-[100px] 2xl:pl-[165px] flex flex-col font-barlow pb-[81px] 2xl:pb-[101px] items-center mt-[34px] 2xl:mt-[65px] px-6 md:px-[38.5px]">
      <h1 className="uppercase md:self-start 2xl:text-[28px]">
        <span className="mr-4 font-bold">03</span> space launch 101
      </h1>
      <div className="h-[170px] md:h-[310px] w-screen md:mt-[60px] md:mb-[56px] mt-8 mb-[34px] relative lg:hidden">
        <Image src={imageLandscape} alt={name} fill />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center lg:flex-row lg:w-full 2xl:mt-[26px]">
        <div className="lg:flex lg:flex-row lg:justify-between 2xl:mr-[130px] lg:items-center">
          <nav className="mb-[26px] md:mb-[44px] md:text-2xl lg:mb-0 lg:mr-[60px] 2xl:mr-[80px]">
            <ul className="flex flex-row justify-center gap-4 2xl:gap-8 lg:flex-col font-bellefair">
              <Link
                href="/technology/"
                className={
                  router == "/technology"
                    ? "md:w-[60px] md:h-[60px] w-10 h-10 rounded-full border-x border-y border-transparent grid place-content-center border-solid bg-white text-black"
                    : "bg-transparent text-white md:w-[60px] md:h-[60px] w-10 h-10 rounded-full border-x border-y border-white grid place-content-center border-solid"
                }
              >
                <li>1</li>
              </Link>
              <Link
                href="/technology/spaceport"
                className={
                  router == "/technology/spaceport"
                    ? "md:w-[60px] md:h-[60px] w-10 h-10 rounded-full border-x border-y border-transparent grid place-content-center border-solid bg-white text-black"
                    : "bg-transparent text-white md:w-[60px] md:h-[60px] w-10 h-10 rounded-full border-x border-y border-white grid place-content-center border-solid"
                }
              >
                <li>2</li>
              </Link>
              <Link
                href="/technology/capsule"
                className={
                  router == "/technology/capsule"
                    ? "md:w-[60px] md:h-[60px] w-10 h-10 rounded-full border-x border-y border-transparent grid place-content-center border-solid bg-white text-black"
                    : "bg-transparent text-white md:w-[60px] md:h-[60px] w-10 h-10 rounded-full border-x border-y border-white grid place-content-center border-solid"
                }
              >
                <li>3</li>
              </Link>
            </ul>
          </nav>
          <div className="text-center lg:text-start">
            <h2 className="uppercase text-[14px] lg:text-start lg:text-[16px] lg:mb-[11px] md:text-[16px] mb-[9] md:mb-4 ">
              {" "}
              the terminology
            </h2>
            <h3 className="mb-4 text-2xl uppercase font-bellefair lg:text-start md:text-[40px] lg:text-[56px] lg:leading-[64px] ">
              {" "}
              {name}
            </h3>
            <p className="font-barlowreg text-[15px] 2xl:leading-8 lg:text-[18px] leading-[25px] text-center lg:text-start md:w-[458px] lg:w-[344px] 2xl:w-[444px] md:text-[16px]">
              {description}
            </p>
          </div>
        </div>
        <div className="relative lg:w-[390px] lg:h-[400px] 2xl:w-[515px] 2xl:h-[527px] hidden  lg:inline-flex">
          <Image src={imagePortrait} alt={name} fill />
        </div>
      </div>
    </section>
  );
}
