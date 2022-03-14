import React, { useState } from "react";

import styles from "../styles/projects.module.css";
import Arrow from "../SVG/Arrow";

import clsx from "clsx";
import { FaGithubSquare } from 'react-icons/fa'
import { BsLink45Deg } from 'react-icons/bs'
import checkNumber from "../utils/checkNumber";

const BigProjectCard = ({ title, date, images, description, technologies, github, linkWeb, changelog }) => {
  const [activeImage, setActiveImage] = useState(0);

  let maxNumber = images.length - 1;

  const arrowTransform = (e) => {
      e.target.classList.toggle("ArrowActive")
  
      setTimeout(() => {
        e.target.classList.toggle("ArrowActive")
      }, 250);
      // e.target.firstChild.classList.add("ArrowActive")
  
      // setTimeout(() => {
      //     e.target.firstChild.classList.remove("ArrowActive")
      // }, 800);
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
        <div className={styles.head}>
          <h1>{title}</h1>
          <div className={styles.icons}>
            <FaGithubSquare href={github} target="_blank" />
          { linkWeb && 
            <BsLink45Deg href={linkWeb} target="_blank" />
          }
          </div>
        </div>
        <h3>{date}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {technologies.map((span, index) => (
          <span key={index}>{span}</span>
        ))}
        <span>Changelog</span>
        </div>
      </div>
    </div>
  );
};

export default BigProjectCard;
