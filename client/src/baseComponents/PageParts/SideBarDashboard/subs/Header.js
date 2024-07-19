import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import styles from '../SideBarDashboard.module.scss';

const Header = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <>
      <Div type="flex" direction="vertical" hAlign="center" className="p-x-16">
        <Div>Logo</Div>
        <Div className="one-line m-t-16 width-per-100">{profile?.user?.email}</Div>
      </Div>
    </>
  );
};

export default Header;
