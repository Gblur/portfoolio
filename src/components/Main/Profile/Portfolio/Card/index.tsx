import React, {useState} from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export default function Card({src, alt, title, description}: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleCardFlip() {
    setIsFlipped((isflipped) => !isflipped);
  }

  return (
    <div onClick={handleCardFlip} className="card">
      <div className={`cardInner ${isFlipped ? "flipped" : ""}`}>
        <div className="cardFace cardFront">
          <Image src={src} fill alt={alt} />
          <figure>
            <figcaption>{title}</figcaption>
          </figure>
        </div>
        <div className="cardFace cardBack">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}
