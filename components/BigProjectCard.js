import React, { useState } from "react";

import styles from "../styles/projects.module.css";
import Arrow from "../SVG/Arrow";

import clsx from "clsx";
// import arrowTransform from "../utils/arrowTransform";
import checkNumber from "../utils/checkNumber";

const BigProjectCard = ({ title, date, images, description, technologies }) => {
  const [activeImage, setActiveImage] = useState(0);

  let maxNumber = images.length - 1;

  const arrowTransform = (e) => {
    try {
      e.target.firstChild.classList.toggle("ArrowActive")
  
      setTimeout(() => {
          e.target.firstChild.classList.toggle("ArrowActive")
      }, 200);
    } catch(e){}
  }

  return (
    <div className={styles.bigCard}>
      <div className={styles.imagesDisplay}>
        <Arrow
          className={styles.arrowLeft}
          onClick={(e) => {
            setActiveImage(checkNumber(activeImage + 1, 0, maxNumber));
            arrowTransform(e);
          }}
        />
        {images.map((image, index) => {
          let imagePosition = "image Right";

          if (index === activeImage) imagePosition = "image Active";
          else if (
            index === activeImage - 1 ||
            (activeImage === 0 && index === images.length - 1)
          )
            imagePosition = "image Left";

          return (
            <div key={index} className={clsx(imagePosition)}>
              <img className={styles.imageView} src={image} alt={title} />
              <img className={styles.imageBlur} src={image} alt={title} />
            </div>
          );
        })}
        <Arrow
          className={styles.arrowRight}
          onClick={(e) => {
            setActiveImage(checkNumber(activeImage - 1, 0, maxNumber));
            arrowTransform(e);
          }}
        />
      </div>
      <div className={styles.cardInfo}>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{description}</p>
        {technologies.map((span, index) => (
          <span key={index}>{span}</span>
        ))}
      </div>
    </div>
  );
};

export default BigProjectCard;
