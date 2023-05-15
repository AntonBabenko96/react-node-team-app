import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import styles from './NewsPage.module.scss';
import { getNews } from 'api/news';
import notFoundImg from '../../img/notFound/notFound.png';

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const { search } = useLocation();
  let query = search.slice(8);

  useEffect(() => {
    const fetchNews = async () => {
      //Функція getNews(page, limit, search_query) -
      //1) першим параметром приймає номер сторінки
      //2) другим параметром кількість новин на сторінці
      //3) третій параметр - це пошуковий запит по заголовку новини
      const result = await getNews(1, 6, query);
      //У відповіді від бекенду повертається обєкт формату:
      // {
      //   total: 1151, <--- загальна кількість новин яка повернулась після пошуку
      //   data: [{},{},{}], <--- масив обєктів з ноаинами які відповідають пошуковому запиту
      // }
      setNews([...result.data]);
    };
    fetchNews();
  }, [query]);

  const newsMarkup = (
    <>
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
    </>
  );

  const notFoundMarkup = (
    <div className={styles.noteFound}>
      <p className={styles.noteFoundText}>
        `Ooops! Nothing was found for your request :(`
      </p>
      <img className={styles.noteFoundImg} src={notFoundImg} alt="Not Found" />
    </div>
  );

  return (
    <section className={styles.newsSection}>
      <div className="container">
        <h1 className={styles.newsMainTitle}>News</h1>
        <NoticesSearch />
        {!!news.length ? newsMarkup : notFoundMarkup}
      </div>
    </section>
  );
}
