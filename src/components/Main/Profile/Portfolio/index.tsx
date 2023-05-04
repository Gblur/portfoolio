import React, {useState} from "react";
import Image from "next/image";
import Card from "./Card";

type Props = {};

export default function PortFolio({}: Props) {
  return (
    <article className="grid">
      <Card
        title="Mind Map"
        description="Capstone project I have developed for visualizing Data with React-flow library using Next.js, React, Zustand, Mui, MongoDB Cloud, Oauth."
        src="/Capstone.png"
        alt="capstone project"
        link="https://mindmap-project.vercel.app"
      />
      <Card
        title="Flowa"
        description="Process automation tool for hospitals. In my time at Tiplu I worked on this software with React and Typescript in an
            ASP.net Environment"
        src="/Flowa.png"
        alt="capstone project"
        link="https://tiplu.de/produkte/flowa-coming-soon/"
      />
    </article>
  );
}
