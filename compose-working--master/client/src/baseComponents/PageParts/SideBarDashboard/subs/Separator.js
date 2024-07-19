import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../SideBarDashboard.module.scss';

const Separator = () => {
  return (
    <>
      <Div className={cx('width-per-100 bg-gray-bright m-y-16', styles.dashboardBreaker)} />
    </>
  );
};

export default Separator;
