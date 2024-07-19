import React, { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Div, MobNav, MobNavItem, MobSubNavItem } from 'basedesign-iswad';

import HeightTransitionEffect from '@/baseComponents/ReusableComps/HeightTransitionEffect';
import Icon from '@/baseComponents/ReusableComps/Icon';
import AllPageClickable from '@/baseComponents/ReusableComps/AllPageClickable';

import { MENU_ITEMS, SUB_MENU_ITEMS } from '@/constants/menuItems';
import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';
import { hideMobileNav } from '@/reducers/general/mobileNavIsActive';
import { AUTO_SCROLL_BEHAVIOR, COLORS } from '@/constants/vars';
import { LIST_OF_ICONS } from '@/constants/devDesignVars';

import styles from '../../Header.module.scss';

const MobileNav = ({ changesThePage = true, isAppPage }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const mobileNavIsActive = useSelector((state) => state.mobileNavIsActive);
  const activeMenu = useSelector((state) => state.activeMenu);
  const activeSubMenu = useSelector((state) => state.activeSubMenu);
  const homePageElements = useSelector((state) => state.homePageElements);
  const profile = useSelector((state) => state.profile);
  const curUserGroup = useSelector((state) => state.curUserGroup);

  const [hoveredSubMenu, setHoveredSubMenu] = useState([]);

  return (
    <>
      {mobileNavIsActive && <AllPageClickable onClick={() => dispatch(hideMobileNav())} />}
      <MobNav
        type="flex"
        className={cx(
          'width-px-300 transition-one bg-white box-shadow-type-one p-all-16 text-black HeaderMobNavContainerZIndex',
          styles.mobNavContainer
        )}
        activeClassName={styles.mobNavContainerIsActive}
        isActive={mobileNavIsActive}>
        {MENU_ITEMS?.map((item, idx) => {
          if (
            item?.showInMobile &&
            ((!item?.allowedGroups?.length && !isAppPage) ||
              item?.allowedGroups?.includes(curUserGroup))
          ) {
            return (
              <MobNavItem
                key={idx}
                isActive={activeMenu === item.identifier}
                className={cx('mouse-hand m-b-10')}
                activeClassName={cx('nothing')}
                onClick={() => {
                  if (!item?.hasSubMenu) {
                    dispatch(hideMobileNav());
                    dispatch(setActiveMenu(item.identifier));
                    dispatch(setActiveSubMenu(''));
                    setHoveredSubMenu([]);
                    if (changesThePage) {
                      router.push(item?.to);
                    } else {
                      homePageElements[item.identifier]?.scrollIntoView(AUTO_SCROLL_BEHAVIOR);
                    }
                  } else {
                    const localHoveredSubMenu = [...hoveredSubMenu];
                    if (localHoveredSubMenu?.includes(item.identifier)) {
                      localHoveredSubMenu = localHoveredSubMenu.filter(
                        (menu) => menu !== item.identifier
                      );
                    } else {
                      localHoveredSubMenu?.push(item.identifier);
                    }
                    setHoveredSubMenu(localHoveredSubMenu);
                  }
                }}>
                <Div type="flex" vAlign="center">
                  <Div
                    className={cx(
                      styles.mobNavItemTitle,
                      activeMenu === item.identifier ? 'f-b' : ''
                    )}>
                    {item.title}
                  </Div>
                  {item?.hasSubMenu ? (
                    <Div
                      type="flex"
                      hAlign="center"
                      vAlign="center"
                      className="bg-theme-three br-rad-per-50 width-px-20 height-px-20 m-l-8">
                      <Icon type={LIST_OF_ICONS.angleDown} scale={0.7} color={'black'} />
                    </Div>
                  ) : (
                    ''
                  )}
                </Div>
                {item?.hasSubMenu && (
                  <HeightTransitionEffect
                    isActive={hoveredSubMenu?.includes(item.identifier)}
                    className={cx('', styles.mobNavItemSubNavContainer)}>
                    {SUB_MENU_ITEMS[item.identifier]?.map((subItem, subIdx) => (
                      <MobSubNavItem
                        className="m-t-16"
                        activeClassName={cx('text-black f-b')}
                        isActive={
                          activeMenu === item.identifier && activeSubMenu === subItem.identifier
                        }
                        key={subIdx}
                        onClick={() => {
                          dispatch(hideMobileNav());
                          dispatch(setActiveMenu(item.identifier));
                          dispatch(setActiveSubMenu(subItem.identifier));
                          setHoveredSubMenu([]);
                          if (changesThePage) {
                            router.push(subItem?.to);
                          } else {
                            homePageElements[subItem.identifier]?.scrollIntoView(
                              AUTO_SCROLL_BEHAVIOR
                            );
                          }
                        }}>
                        <Div type="flex">
                          <Div className={cx('m-b-16', styles.mobNavItemTitle)}>
                            {subItem.title}
                          </Div>
                        </Div>
                      </MobSubNavItem>
                    ))}
                  </HeightTransitionEffect>
                )}
              </MobNavItem>
            );
          }
        })}
      </MobNav>
    </>
  );
};

export default MobileNav;
