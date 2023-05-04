import React, {useState} from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
};

export default function Card({src, alt, title, description, link}: Props) {
  return (
    <div className="card">
      <div className={`cardInner`}>
        <div className="cardFace cardFront">
          <Image src={src} fill alt={alt} />
          <figure>
            <figcaption>Project</figcaption>
          </figure>
        </div>
        <div className="cardFace cardBack">
          <span>{description}</span>
          <a href={link}>Project</a>
        </div>
      </div>
    </div>
  );
}
