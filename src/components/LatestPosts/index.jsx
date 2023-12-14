import clsx from "clsx";
import Link from '@docusaurus/Link';
import styles from "./LatestPosts.module.css";

import latestBlogPostList from './latest-blog-posts.json';
import latestDocsList from './latest-docs.json';

function Post({ title, permalink, tags, yearMonth, day }) {
  return (
    <div className={styles.latest_post_row_item} key={permalink}>
      <div className={styles.post_list_date_container}>
        <div className={styles.post_list_date_yearmonth}>{yearMonth}</div>
        <div>
          <div className={styles.post_list_date_day}>{day}</div>
        </div>
      </div>
      <div className={styles.latest_post_row_item_title}>
      <Link to={permalink}  key={permalink}>
        {title}
      </Link>
      </div>
      <div className={styles.latest_post_row_item_tags}>
        {tags.length > 0 &&
          tags
            .slice(0, 2)
            .map(({ label, permalink: tagPermalink }, index) => (
              <Link
                key={tagPermalink}
                className={`post__tags ${index < tags.length ? 'margin-right--sm' : ''
                  }`}
                to={tagPermalink}
                style={{
                  fontSize: '0.75em',
                  fontWeight: 500,
                }}>
                {label}
              </Link>
            ))}
      </div>
    </div>
  );
}

export default function LatestPosts() {
  return (
    <section className={styles.latestPosts}>
      <p />
      <h1 className={styles.title}>最新部落格文章</h1>
      <div className="container">
        <div className={styles.latest_post_row}>
          {
            latestBlogPostList.map((props, idx) => (
              <Post key={idx} {...props} />
            ))}
        </div>
      </div>
      <p /><p />
      <h1 className={styles.title}>最新文件庫文章</h1>
      <div className="container">
        <div className={styles.latest_post_row}>
          {latestDocsList.map((props, idx) => (
            <Post key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
