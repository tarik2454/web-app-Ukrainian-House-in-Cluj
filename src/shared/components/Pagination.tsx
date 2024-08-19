import { ReactNode, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { SpriteSVG } from '../../img/SpriteSVG';

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

  useEffect(() => {
    setCurrentPage(0);
  }, [array]);

  const currentItems = array.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      <ul className={stylesUl}>{currentItems.map(renderItemLi)}</ul>

      <ReactPaginate
        className="flex justify-center items-center gap-5"
        breakLabel="..."
        nextLabel={<SpriteSVG name="arrow-right" />}
        onPageChange={handlePageClick}
        activeClassName="text-blue-900"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={Math.ceil(array.length / itemsPerPage)}
        previousLabel={<SpriteSVG name="arrow-left" />}
        forcePage={currentPage}
      />
    </div>
  );
}
