import React from "react";
import Image from "next/image";
import Icon from "@mui/material/Icon";

type Props = {};

export default function Introduction({}: Props) {
  return (
    <section>
      <Image src="/Logo_optimized.svg" width={25} height={25} alt="Logo" />
      <h1>Hello</h1>
      <p>
        I&apos;m Florian and a Frontend webdeveloper from Hamburg. My preferred
        framework is React but I&apos;m also not opposed for other frameworks
        like Vue. Feel free to explore my projects or connect with me.
      </p>
    </section>
  );
}
