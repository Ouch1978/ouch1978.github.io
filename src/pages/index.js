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