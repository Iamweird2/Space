import React from "react";
import { useRouter } from "next/router";
import { useGetdestinationQuery } from "../../states/api/apiSlice";
import EachPlanet from "../../components/EachPlanet";
import { useGetDestinationsQuery } from "../../states/api/apiSlice";
export default function Planet() {
  const router = useRouter().asPath;
  const {
    data: destination,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDestinationsQuery();
  if (isLoading) {
    return <div> Loading</div>;
  }
  if (isSuccess) {
    if (router == "/destination/mars") {
      return (
        <EachPlanet
          name={destination[1].name}
          planet1={destination[0].name}
          planet2={destination[1].name}
          planet3={destination[2].name}
          planet4={destination[3].name}
          image={destination[1].images.png}
          description={destination[1].description}
          distance={destination[1].distance}
          travel={destination[1].travel}
        />
      );
    } else if (router == "/destination/europa") {
      return (
        <EachPlanet
          name={destination[2].name}
          planet1={destination[0].name}
          planet2={destination[1].name}
          planet3={destination[2].name}
          planet4={destination[3].name}
          image={destination[2].images.png}
          description={destination[2].description}
          distance={destination[2].distance}
          travel={destination[2].travel}
        />
      );
    } else if (router == "/destination/titan") {
      return (
        <EachPlanet
          name={destination[3].name}
          planet1={destination[0].name}
          planet2={destination[1].name}
          planet3={destination[2].name}
          planet4={destination[3].name}
          image={destination[3].images.png}
          description={destination[3].description}
          distance={destination[3].distance}
          travel={destination[3].travel}
        />
      );
    } else {
      return <div>not found</div>;
    }
  }
}
