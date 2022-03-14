import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Achievements from "../components/Achievements";

function HomepageHeader() {
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`首頁`} description="不務正業的架構師">
      <HomepageHeader />
      <main>
        <Achievements />
      </main>
    </Layout>
  );
}
