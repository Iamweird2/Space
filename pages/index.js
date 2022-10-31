import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title className="font-barlow">Space</title>
      </Head>
      <div className=" font-barlow lg:overflow-hidden px-6 lg:px-[60px]  flex flex-col items-center 2xl:items-end py-[58px] 2xl:pb-[131px] sm:pt-[106px] lg:pt-32 sm:pb-[90px] sm:gap-[156px]  mx-auto gap-[81px] lg:flex-row xl:justify-between xl:px-[156px] xl:gap-0 2xl:gap-[336px]  2xl:pt-[251px] xl:w-full">
        <div className="flex flex-col gap-4 text-center sm:gap-6 sm:w-[444px] 2xl:w-[450px] lg:text-left">
          <h3 className="sm:text-xl 2xl:text-[28px]">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="font-bellefair uppercase text-[80px] sm:text-[150px] lg:text-[120px] sm:leading-[150px]">
            space
          </h1>
          <p className="text-[15px] sm:text-[16px] 2xl:text-[18px] font-barlowreg sm:leading-[28px] ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of world
            experience!
          </p>
        </div>
        <div className="transition-all ease-in-out text-[20px] font-bellefair bg-cover bg-white text-black text-3xl uppercase flex justify-center items-center w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] sm:text-[32px] rounded-full outline-[30px] outline-transparent hover:outline-sideBar  outline  ">
          <Link href="destination">explore</Link>
        </div>
      </div>
    </>
  );
}
