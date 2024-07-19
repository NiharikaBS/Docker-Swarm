import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Logout from '@/baseComponents/LoginRegister/Logout';
import Icon from '@/baseComponents/ReusableComps/Icon';

import { USER_GROUPS } from '@/constants/userGroups';

import MenuItem from './MenuItem';
import { OTHER_ITEMS } from '../constants';
import styles from '../SideBarDashboard.module.scss';

const OtherItems = () => {
  const curUserGroup = useSelector((state) => state.curUserGroup);

  return (
    <>
      {OTHER_ITEMS?.map((item, identifier) => {
        if (item?.allowedGroups?.includes(curUserGroup)) {
          return (
            <Div className="m-b-8 p-x-16" key={identifier}>
              <MenuItem menu={item} />
            </Div>
          );
        }
      })}
      <Logout className="p-x-16">
        <MenuItem
          menu={{
            title: 'Logout',
            icon: 'logout'
          }}
          isLogOut={true}
        />
      </Logout>
    </>
  );
};

export default OtherItems;
