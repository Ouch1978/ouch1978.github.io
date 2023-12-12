import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <section className="herowave">
        <div className="content">
          <h2>{siteConfig.title}</h2>
          <h3>{siteConfig.tagline}</h3>
          <br />
        </div>
        <div className="waves"></div>
      </section>
    </header>
  );
}
