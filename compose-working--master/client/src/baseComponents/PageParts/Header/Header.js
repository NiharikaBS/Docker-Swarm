import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { lgDesignSize, smDesignSize } from '@/constants/vars';

import MobileHeader from './subs/Mobile/MobileHeader';
import DesktopHeader from './subs/Desktop/DesktopHeader';
import styles from './Header.module.scss';

const Header = ({ hasStickyHeader, changesThePage = true, headerColorType, isAppPage }) => {
  const scrollPosition = useSelector((state) => state.scrollPosition);

  return (
    <>
      {scrollPosition > 0 && hasStickyHeader ? (
        <Div
          type="flex"
          distributedBetween
          vAlign="center"
          className={cx('width-per-100 pos-fix pos-fix--lt headerBgZIndex height-header')}
        />
      ) : (
        ''
      )}
      <Div
        type="flex"
        distributedBetween
        vAlign="center"
        className={cx(
          'width-per-100 height-header p-x-16',
          // styles.headerContainer,
          hasStickyHeader && 'pos-fix pos-fix--lt headerZIndex'
        )}>
        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          showIn={['xs', 'sm', 'md']}
          className="width-per-100">
          <MobileHeader changesThePage={changesThePage} isAppPage={isAppPage} />
        </Div>

        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          showIn={['lg']}
          className={cx(
            'width-per-100 m-l-auto m-r-auto',
            isAppPage ? 'global-app-container' : 'global-container'
          )}>
          <DesktopHeader changesThePage={changesThePage} isAppPage={isAppPage} />
        </Div>
      </Div>
    </>
  );
};

export default Header;
