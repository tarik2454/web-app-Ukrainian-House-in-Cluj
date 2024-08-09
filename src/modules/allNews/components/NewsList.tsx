import newsData from '../../../shared/data/news-data';
import NewsCard from './NewsCard';

export default function NewsList({ mainPage }: { mainPage?: boolean }) {
  const displayedNews = mainPage ? newsData.slice(0, 6) : newsData;

  return (
    <ul className={`grid gap-8 ${mainPage ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {displayedNews.map((news, index) => {
        const { title, description, date, image } = news;
        return (
          <li key={index}>
            <NewsCard
              title={title}
              description={description}
              date={date}
              image={image}
              mainPage={mainPage}
            />
          </li>
        );
      })}
    </ul>
  );
}
