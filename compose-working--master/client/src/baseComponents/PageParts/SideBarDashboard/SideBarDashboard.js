import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, ActivableElement } from 'basedesign-iswad';

import { SIDE_BAR_DASHBOARD_ITEMS } from '@/constants/sideBarDashboardItems';

import Header from './subs/Header';
import MenuItem from './subs/MenuItem';
import Toggler from './subs/Toggler';
import Separator from './subs/Separator';
import OtherItems from './subs/OtherItems';
import styles from './SideBarDashboard.module.scss';

const SideBarDashboard = () => {
  const dispatch = useDispatch();
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);
  const profile = useSelector((state) => state.profile);
  const curUserGroup = useSelector((state) => state.curUserGroup);

  return (
    <>
      <ActivableElement
        className={cx(
          'of-y-auto bg-white flex flex--dir--col flex--jc--between p-y-16 box-shadow-type-one',
          styles.dashboard
        )}
        activeClassName={cx(styles.dashboardIsActive)}
        isActive={sideBarDashboardIsActive}>
        <Div>
          {/* <Header /> */}
          <Div className="">
            {SIDE_BAR_DASHBOARD_ITEMS?.map((item, identifier) => {
              if (item?.allowedGroups?.includes(curUserGroup)) {
                return (
                  <Div className="m-b-8 p-x-16" key={identifier}>
                    <MenuItem menu={item} />
                  </Div>
                );
              }
            })}
            <Separator />
            <OtherItems />
          </Div>
        </Div>
        {/* <Separator /> */}
        <Toggler />
      </ActivableElement>
    </>
  );
};

export default SideBarDashboard;
