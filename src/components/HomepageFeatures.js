import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Certified ScrumMaster",
    image: "../../img/seal-csm.png",
    earned: "2018-12-31",
  },
  {
    title: "Certified Scrum Product Owner",
    image: "../../img/seal-cspo.png",
    earned: "2019-09-29",
  },
  {
    title: "Certified Scrum Developer",
    image: "../../img/seal-csd.png",
    earned: "2018-12-31",
  },
  {
    title: "Advanced Certified Scrum Developer",
    image: "../../img/seal-advcsd.png",
    earned: "2018-12-31",
  },
  {
    title: "Professional Scrum Master I",
    image: "../../img/badge-psm-i.png",
    earned: "2020-01-28",
  },
];

function Feature({ image, title, earned }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3> {title} </h3>
        <p> {earned} </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <h1>認證與成就</h1>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
