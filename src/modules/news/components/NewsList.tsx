import newsData from '../../../shared/data/news-data';
import NewsCard from './NewsCard';
import NewsProps from '../types/newsProps';
import Pagination from '../../../shared/components/Pagination';

export default function NewsList({ mainPage }: { mainPage?: boolean }) {
  const displayedNews = mainPage ? newsData.slice(0, 6) : newsData;

  const itemsPerPage = 10;

  const renderItemLi = (item: NewsProps) => (
    <li key={item.id}>
      <NewsCard product={item} mainPage={mainPage ?? false} />
    </li>
  );

  return (
    <ul className={`grid gap-8 ${mainPage ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {mainPage ? (
        displayedNews.map(renderItemLi)
      ) : (
        <Pagination
          itemsPerPage={itemsPerPage}
          array={displayedNews}
          stylesUl="grid gap-8 mb-[50px]"
          renderItemLi={renderItemLi}
        />
      )}
    </ul>
  );
}
