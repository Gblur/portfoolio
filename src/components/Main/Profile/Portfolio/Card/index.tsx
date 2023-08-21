import React, { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
};

export default function Card({ src, alt, title, description, link }: Props) {
  return (
    <div className="card">
      <div className={`cardInner`}>
        <div className="cardFace cardFront">
          <Image src={src} fill alt={alt} />
          <figure>
            <figcaption>{title}</figcaption>
          </figure>
        </div>
        <div className="cardFace cardBack">
          <span>{description}</span>
          <a target="_blank" href={link}>
            Link to Page
          </a>
        </div>
      </div>
    </div>
  );
}
