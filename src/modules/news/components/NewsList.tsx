import { useNews } from '@/hooks/useNewsItem';

// import newsData from '@/shared/data/news-data';
import NewsCard from './NewsCard';
import NewsProps from '../types/newsProps';
import Pagination from '@/shared/components/Pagination';

export default function NewsList({ mainPage }: { mainPage?: boolean }) {
  const { data: news, isLoading, isError } = useNews();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading news</p>;

  const displayedNews = mainPage ? news.slice(0, 6) : news;

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
