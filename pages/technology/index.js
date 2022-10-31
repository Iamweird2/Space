import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useGetTechnologyQuery } from "../../states/api/apiSlice";
import EachTech from "../../components/EachTech";

export default function Technology() {
  const router = useRouter();
  const {
    data: technology,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTechnologyQuery();
  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (isSuccess) {
    return (
      <EachTech
        name={technology[0].name}
        tech1={technology[0].name}
        tech2={technology[1].name}
        tech3={technology[2].name}
        imagePortrait={technology[0].images.portrait}
        imageLandscape={technology[0].images.landscape}
        description={technology[0].description}
      />
    );
  } else {
    return;
  }
}
