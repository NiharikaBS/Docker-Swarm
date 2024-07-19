import React from 'react';
import cx from 'classnames';
import { Div, Pagination as BasePagination } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, setCurrentPage, numberOfTotalPages, ...props }) => {
  const firstPageComp = () => <Icon type="angleDoubleLeft" color={COLORS['theme-two']} />;
  const lastPageComp = () => <Icon type="angleDoubleRight" color={COLORS['theme-two']} />;
  const prevComp = () => <Icon type="angleLeft" scale={0.9} color={COLORS['theme-two']} />;
  const nextComp = () => <Icon type="angleRight" scale={0.9} color={COLORS['theme-two']} />;
  return (
    <>
      {numberOfTotalPages > 1 && (
        <BasePagination
          numberOfShownPages={5}
          numberOfTotalPages={numberOfTotalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          showDefaultFirstLastIcon={false}
          showDefaultPrevNextIcon={false}
          firstPageComp={firstPageComp}
          lastPageCome={lastPageComp}
          prevComp={prevComp}
          nextComp={nextComp}
          containerClassName={cx(
            'flex--wrap width-per-100 max-width-px-400 flex--jc--between m-l-auto m-r-auto'
          )}
          itemClassName={cx(
            'width-px-30 height-px-30 flex flex--jc--center flex--ai--center br-rad-per-50 bg-red text-white fs-px-12',
            styles.itemContainer
          )}
          activeItemClassName={cx(styles.activeItemContainer)}
          {...props}
        />
      )}
    </>
  );
};

export default Pagination;
