import React, {useState} from "react";
import Image from "next/image";
import Card from "./Card";

type Props = {};

export default function PortFolio({}: Props) {
  return (
    <article className="grid">
      <Card
        title="Mind Map"
        description="Capstone project I have developed for visualizing Data and send to
            Project management tools"
        src="/Capstone.png"
        alt="capstone project"
      />
      <Card
        title="Flowa"
        description="Process automation for hospitals. Worked with Javascript in an
            ASP.net Environment and integrated React additionally."
        src="/Capstone.png"
        alt="capstone project"
      />
    </article>
  );
}
