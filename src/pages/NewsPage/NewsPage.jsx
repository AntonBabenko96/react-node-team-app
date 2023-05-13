import { useState, useEffect } from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import styles from './NewsPage.module.scss';
import { getNews } from 'api/news';

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const result = await getNews();
      setNews([...result]);
    };
    fetchNews();
  }, []);

  return (
    <section className={styles.newsSection}>
      <div className="container">
        <h1 className={styles.newsMainTitle}>News</h1>
        <NoticesSearch />
        <ul className={styles.newsList}>
          {news.map(item => {
            const year = item.date.slice(0, 4);
            const month = item.date.slice(5, 7);
            const day = item.date.slice(8, 10);
            const date = [day, month, year].join('/');

            const newsTitle = item.title.slice(0, 50) + `...`;
            const newsText = item.text.slice(0, 160) + `...`;
            return (
              <li className={styles.newsItem} key={item._id}>
                <img
                  className={styles.newsImage}
                  src={item.imgUrl}
                  alt={item.title}
                />
                <div className={styles.newsTextBox}>
                  <div>
                    <h2 className={styles.newsTitle}>
                      {item.title.length <= 50 ? item.title : newsTitle}
                    </h2>
                    <p className={styles.newsText}>
                      {item.text.length <= 160 ? item.text : newsText}
                    </p>
                  </div>

                  <div className={styles.dateLinkBox}>
                    <p className={styles.newsDate}>{date}</p>
                    <a
                      className={styles.newsLink}
                      href={item.url}
                      target="blanck"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
