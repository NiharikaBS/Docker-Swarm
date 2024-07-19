import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div, HamburgerIcon } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Button from '@/baseComponents/ReusableComps/Button';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { toggleMobileNav } from '@/reducers/general/mobileNavIsActive';

import Logo from '@/images/js-Images/general/Header/WideLogo.png';

import { HAMBURGER_CONFIG } from '../../constants';
import MobileNav from './MobileNav';
import styles from '../../Header.module.scss';

const MobileHeader = ({ changesThePage, headerColorType, isAppPage }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const mobileNavIsActive = useSelector((state) => state.mobileNavIsActive);

  const [showHamburgerIcon, setShowHamburgerIcon] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowHamburgerIcon(true);
    }
  }, []);

  return (
    <>
      <Div type="flex" vAlign="center" distributedBetween className="width-per-100">
        <Div type="flex" vAlign="center">
          <Div>
            <MobileNav changesThePage={changesThePage} isAppPage={isAppPage} />
          </Div>
          <Div
            className="mouse-hand"
            onClick={() => {
              dispatch(setActiveMenu('/home'));
              dispatch(setActiveSubMenu(''));
              if (changesThePage) {
                router.push('/');
              } else {
                window.scrollTo(0, 0);
              }
            }}>
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className={cx('pos-rel height-header width-px-100 m-l-16')}>
              <AppImage src={Logo} objectFit="contain" width={100} />
            </Div>
          </Div>
        </Div>

        <Div type="flex" vAlign="center">
          {/* <Div className="width-px-175 m-r-temp-3">
            <Button>Book a Meeting</Button>
          </Div> */}
          {showHamburgerIcon && (
            <Div>
              <HamburgerIcon
                cssConfig={HAMBURGER_CONFIG}
                onClick={() => dispatch(toggleMobileNav())}
                closeIcon={mobileNavIsActive}
                openIcon={!mobileNavIsActive}
                containerUID="HamburgerInHeaderID"
              />
            </Div>
          )}
        </Div>
      </Div>
    </>
  );
};

export default MobileHeader;
