import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { useGetCrewQuery } from "../../states/api/apiSlice";
import Crew from "../../components/Crew";
import Head from "next/head";

export default function Destination() {
  const router = useRouter();
  const {
    data: crew,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCrewQuery();
  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (isSuccess) {
    return (
      <Crew
        name={crew[0].name}
        image={crew[0].images.png}
        role={crew[0].role}
        bio={crew[0].bio}
      />
    );
  } else {
    return;
  }
}
