import newsData from '../../../shared/data/news-data';
import NewsCard from './NewsCard';

export default function NewsList({ mainPage }: { mainPage?: boolean }) {
  return (
    <ul className={`grid gap-8 ${mainPage ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {newsData.slice(0, mainPage ? 3 : newsData.length).map((news, index) => {
        const { title, description, date } = news;
        return (
          <li key={index}>
            <NewsCard title={title} description={description} date={date} />
          </li>
        );
      })}

      {mainPage &&
        newsData.slice(3, 6).map((news, index) => {
          const { title, description, date } = news;
          return (
            <li key={index}>
              <NewsCard title={title} description={description} date={date} />
            </li>
          );
        })}
    </ul>
  );
}
