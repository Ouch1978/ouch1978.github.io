import React from "react";
import clsx from "clsx";
import styles from "./LatestPosts.module.css";

function BlogPost({ image, title, earned }) {
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

function Doc({ image, title, earned }) {
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

export default function LatestPosts() {
  const BlogPostList = "";
  const DocsList = "";
  return <></>;
  return (
    <>
      <section className={styles.features}>
        <h1>最新部落格文章</h1>
        <div className="container">
          <div className="row">
            {/* {BlogPostList.map((props, idx) => (
              <BlogPost key={idx} {...props} />
            ))} */}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <h1>最新文件庫文章</h1>
        <div className="container">
          <div className="row">
            {/* {DocsList.map((props, idx) => (
              <Doc key={idx} {...props} />
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
}
