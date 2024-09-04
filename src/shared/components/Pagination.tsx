import { ReactNode, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { SpriteSVG } from '../../assets/images/SpriteSVG';
import { twMerge } from 'tailwind-merge';
import useScrollToTop from '../hooks/useScrollToTop';

interface PaginationItemProps {
  id: string;
}

interface PaginationProps<T> {
  itemsPerPage: number;
  array: T[];
  renderItemLi: (item: T, index: number) => ReactNode;
  stylesUl: string;
}

export default function Pagination<T extends PaginationItemProps>({
  itemsPerPage,
  array,
  renderItemLi,
  stylesUl,
}: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);

  const { scrollSmooth } = useScrollToTop();

  useEffect(() => {
    setCurrentPage(0);
  }, [array]);

  const currentItems = array.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
    scrollSmooth();
  };

  return (
    <div>
      <ul
        className={twMerge(
          array.length > itemsPerPage ? 'mb-[50px]' : '',
          stylesUl
        )}
      >
        {currentItems.map(renderItemLi)}
      </ul>

      {array.length > itemsPerPage && (
        <ReactPaginate
          className="flex justify-center items-center gap-[2px] relative"
          pageClassName="flex justify-center items-center w-[40px] h-[40px]"
          pageLinkClassName="flex justify-center items-center w-[40px] h-[40px] font-inter-500 font-medium text-sm rounded-sm cursor-pointer"
          activeLinkClassName="text-violet-200 bg-violet-100"
          breakLabel="..."
          previousLabel={
            <div className="flex items-center gap-2 absolute left-0 top-1/2 -translate-y-1/2">
              <SpriteSVG name="arrow-left" />
              <span>Сюди</span>
            </div>
          }
          nextLabel={
            <div className="flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2">
              <span>Туди</span>
              <SpriteSVG name="arrow-right" />
            </div>
          }
          onPageChange={handlePageClick}
          activeClassName="text-blue-900"
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={Math.ceil(array.length / itemsPerPage)}
          forcePage={currentPage}
        />
      )}
    </div>
  );
}
