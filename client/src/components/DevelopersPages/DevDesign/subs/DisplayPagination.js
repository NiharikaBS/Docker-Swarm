import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Pagination from '@/baseComponents/ReusableComps/Pagination';

import styles from '../DevDesign.module.scss';

function DisplayPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        <Div className="">Content of page {currentPage}</Div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfTotalPages={15}
        />
      </Div>
    </>
  );
}

export default DisplayPagination;
