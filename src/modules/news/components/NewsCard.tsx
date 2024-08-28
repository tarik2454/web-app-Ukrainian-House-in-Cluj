import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import NewsProps from '../types/newsProps';

export default function NewsCard({
  product,
  mainPage = false,
}: {
  mainPage: boolean;
  product: NewsProps;
}) {
  const { image, title, description, date } = product;

  if (!product) {
    return <Skeleton height={200} />;
  }

  return (
    <div>
      {!mainPage && (
        <p
          className="mb-2 font-inter-600 text-sm font-semibold text-violet-300
         dark:text-dark-date"
        >
          {date || <Skeleton width={100} />}
        </p>
      )}
      <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200 dark:text-dark-title">
        {title || <Skeleton />}
      </h3>
      <div>
        {image && (
          <img
            className={`float-left mr-6 ${
              mainPage ? 'w-[200px] h-[120px]' : 'w-[320px] h-[200px]'
            }`}
            src={image}
            alt={title}
          />
        )}

        <div>
          {mainPage && (
            <p
              className="mb-2 font-inter-600 text-sm font-semibold text-violet-300
             dark:text-dark-date"
            >
              {date || <Skeleton width={100} />}
            </p>
          )}
          <p>{description || <Skeleton count={3} />}</p>
        </div>
      </div>
    </div>
  );
}
