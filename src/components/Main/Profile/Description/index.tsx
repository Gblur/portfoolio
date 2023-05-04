import React from "react";
import Image from "next/image";

type Props = {};

export default function Introduction({}: Props) {
  return (
    <section>
      <Image src="/Logo_optimized.svg" width={25} height={25} alt="Logo" />
      <h1>Hello People</h1>
      <p>
        I&apos;m Florian and a webdeveloper from Hamburg. I like everything
        which includes visualizing data like charts and graphs.
      </p>
    </section>
  );
}
