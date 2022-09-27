import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <section class="herowave">
        <div class="content">
          <h2>{siteConfig.title}</h2>
          <h3>{siteConfig.tagline}</h3>
          <br />
        </div>
        <div class="waves"></div>
      </section>
    </header>
  );
}
