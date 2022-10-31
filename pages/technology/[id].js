import React from "react";
import { useRouter } from "next/router";
import EachTech from "../../components/EachTech";
import { useGetTechnologyQuery } from "../../states/api/apiSlice";

export default function Tech() {
  const router = useRouter().asPath;
  const {
    data: technology,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTechnologyQuery();
  if (isLoading) {
    return <div> Loading</div>;
  }
  if (isSuccess) {
    if (router == "/technology/spaceport") {
      return (
        <EachTech
          name={technology[1].name}
          tech1={technology[0].name}
          tech2={technology[1].name}
          tech3={technology[2].name}
          imagePortrait={technology[1].images.portrait}
          imageLandscape={technology[1].images.landscape}
          description={technology[1].description}
        />
      );
    } else if (router == "/technology/capsule") {
      return (
        <EachTech
          name={technology[2].name}
          tech1={technology[0].name}
          tech2={technology[1].name}
          tech3={technology[2].name}
          imagePortrait={technology[2].images.portrait}
          imageLandscape={technology[2].images.landscape}
          description={technology[2].description}
        />
      );
    } else {
      return <div>not found</div>;
    }
  }
}
