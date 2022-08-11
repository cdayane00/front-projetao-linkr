import React from "react";
import Skeleton from "react-loading-skeleton";
import { LoadCard } from "../postcard/styles";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingCard() {
  return (
    <>
      <LoadCard>
        <Skeleton
          width="100%"
          height="276px"
          borderRadius={16}
          baseColor="#120E0E"
          highlightColor="#444"
        />
      </LoadCard>
      <LoadCard>
        <Skeleton
          width="100%"
          height="276px"
          borderRadius={16}
          baseColor="#120E0E"
          highlightColor="#444"
        />
      </LoadCard>
      <LoadCard>
        <Skeleton
          width="100%"
          height="276px"
          borderRadius={16}
          baseColor="#120E0E"
          highlightColor="#444"
        />
      </LoadCard>
      <LoadCard>
        <Skeleton
          width="100%"
          height="276px"
          borderRadius={16}
          baseColor="#120E0E"
          highlightColor="#444"
        />
      </LoadCard>
      <LoadCard>
        <Skeleton
          width="100%"
          height="276px"
          borderRadius={16}
          baseColor="#120E0E"
          highlightColor="#444"
        />
      </LoadCard>
    </>
  );
}
