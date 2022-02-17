import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
const {siteConfig} = useDocusaurusContext();
return (
<header>
  <section class="herowave">
    <div class="content">
      <h2>{siteConfig.title}</h2>
      <h3>{siteConfig.tagline}</h3>
      <br/>
      <p> {
        "嘛...文件庫裡應該會放一些可以分門別類的文章，小筆記或是比較難分類的東西就應該會往部落格丟了吧。"
      } </p>
    </div>
    <div class="waves"></div>
  </section>
</header>
);
}

export default function Home() {
const {siteConfig} = useDocusaurusContext();
return (
<Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head/>">
  <HomepageHeader />
  <main>
    <HomepageFeatures />
  </main>
</Layout>
);
}