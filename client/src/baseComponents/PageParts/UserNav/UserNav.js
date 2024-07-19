import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Logout from '@/baseComponents/LoginRegister/Logout';

import { hideUserNav } from '@/reducers/general/userNavIsActive';

import styles from './UserNav.module.scss';

const UserNav = () => {
  const dispatch = useDispatch();
  const userNavIsActive = useSelector((state) => state.userNavIsActive);

  return (
    <>
      {userNavIsActive && (
        <Div
          className="pos-fix pos-fix--lt bg-black width-per-100 height-vh-full op-30 z-10 mouse-hand"
          onClick={() => dispatch(hideUserNav())}
        />
      )}
      {/* <Div
        className={cx(
          'pos-abs p2 bg-theme-one box-shadow-type-one z-100 width-px-100 text-white',
          styles.container,
          userNavIsActive && styles.containerIsActive
        )}>
        <Logout>
          <Div className="text-center">Logout</Div>
        </Logout>
      </Div> */}
    </>
  );
};

export default UserNav;
