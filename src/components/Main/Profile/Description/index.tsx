import React from "react";
import Image from "next/image";
import Icon from "@mui/material/Icon";

type Props = {};

export default function Introduction({}: Props) {
  return (
    <section>
      <Image src="/ProfilePicture_hip_lg.jpg" width={300} height={300} style={{borderRadius: "50%"}} alt="Logo" />
      <h1>Hello everyone</h1>
      <p>
        I&apos;m Florian and a frontend webdeveloper from Hamburg. My preferred
        framework is React. Currently I&apos;m in a training as an IT specialist in system integration.
        Feel free to explore my projects or connect with me.
      </p>
    </section>
  );
}
