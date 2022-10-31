import React from "react";
import { useRouter } from "next/router";
import Crew from "../../components/Crew";
import { useGetCrewQuery } from "../../states/api/apiSlice";

export default function EachCrew() {
  const router = useRouter().asPath;
  const {
    data: crew,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCrewQuery();
  if (isLoading) {
    return <div> Loading</div>;
  }
  if (isSuccess) {
    if (router == "/crew/missionSpecialist") {
      return (
        <Crew
          name={crew[1].name}
          image={crew[1].images.png}
          role={crew[1].role}
          bio={crew[1].bio}
        />
      );
    } else if (router == "/crew/pilot") {
      return (
        <Crew
          name={crew[2].name}
          image={crew[2].images.png}
          role={crew[2].role}
          bio={crew[2].bio}
        />
      );
    } else if (router == "/crew/engineer") {
      return (
        <Crew
          name={crew[3].name}
          image={crew[3].images.png}
          role={crew[3].role}
          bio={crew[3].bio}
        />
      );
    } else {
      return <div>not found</div>;
    }
  }
}
