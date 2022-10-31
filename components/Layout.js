import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const path = useRouter().pathname;
  if (path.includes("destination")) {
    return (
      <main className="w-full bg-fixed bg-no-repeat bg-mobile-destination xs:bg-tablet-destination mdx:bg-desktop-destination ">
        <Header />
        <Sidebar />
        {children}
      </main>
    );
  } else if (path.includes("crew")) {
    return (
      <main className="w-full bg-fixed bg-no-repeat bg-mobile-crew xs:bg-tablet-crew mdx:bg-desktop-crew ">
        <Header />
        <Sidebar />
        {children}
      </main>
    );
  } else if (path.includes("technology")) {
    return (
      <main className="w-full bg-fixed bg-no-repeat bg-mobile-technology xs:bg-tablet-technology mdx:bg-desktop-technology ">
        <Header />
        <Sidebar />
        {children}
      </main>
    );
  } else {
    return (
      <main className="w-full bg-fixed bg-no-repeat bg-cover bg-mobile-home xs:bg-tablet-home mdx:bg-desktop-home ">
        <Header />
        <Sidebar />
        {children}
      </main>
    );
  }
}
