import React from "react";
import Header from "../../components/Header";
import { Main, Content, Feed, Sidebar } from "./styles";
import Post from "../../components/Timeline/postcard";

export default function Timeline() {
  const obj = {
    name: "Arthur Trem-bala",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/199231013_524070082187046_4730781964146693971_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyU5HClpO9FaZmfYOr90y1RCJe48khO1v9WV6Lb1chKtw&oe=6300F066",
    description:
      "Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material.Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material.Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material",
  };
  const arr = [obj, obj, obj, obj];

  return (
    <>
      <Header />
      <Main>
        <Content>
          <Feed>
            {arr.map((e) => (
              <Post props={e} />
            ))}
          </Feed>
          <Sidebar />
        </Content>
      </Main>
    </>
  );
}
