import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../Table.module.scss';

const SortIcon = ({ isAsc, isDesc, notSorted, className }) => {
  return (
    <>
      {isAsc && (
        <Div className={cx('m-r-16', styles.downIcon, className)}>
          <Icon type="dashboard" />
        </Div>
      )}
      {isDesc && (
        <Div className={cx('m-r-16', styles.upIcon, className)}>
          <Icon type="dashboard" />
        </Div>
      )}
      {notSorted && (
        <Div
          typw="flex"
          direction="vertical"
          vAlign="center"
          hAlign="center"
          className={cx('m-r-16', className)}>
          <Icon type="dashboard" color={COLORS.inverse} />
          <Icon type="dashboard" color={COLORS.inverse} />
        </Div>
      )}
    </>
  );
};

export default SortIcon;
