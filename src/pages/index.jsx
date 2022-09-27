import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Achievements from "../components/Achievements";
import {Hero} from "../components/Hero";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`首頁`} description="不務正業的架構師">
      <Hero />
      <main>
        <Achievements />
      </main>
    </Layout>
  );
}
