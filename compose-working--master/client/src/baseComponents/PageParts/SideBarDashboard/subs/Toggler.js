import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';
import { toggleSideBarDashboard } from '@/reducers/general/sidebarDashboardIsActive';

import styles from '../SideBarDashboard.module.scss';

const Toggler = () => {
  const dispatch = useDispatch();
  const sideBarDashboardIsActive = useSelector((state) => state.sideBarDashboardIsActive);
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx(
          'pos-abs height-px-30 width-px-30 bg-white br-rad-px-5 box-shadow-type-one',
          styles.toggler,
          !sideBarDashboardIsActive && 'rotate-180',
          sideBarDashboardIsActive ? styles.togglerDashboardIsOpen : styles.togglerDashboardIsClose
        )}>
        <Div
          className={cx('mouse-hand text-silver')}
          onClick={() => dispatch(toggleSideBarDashboard())}>
          <Icon type="dashboard" color={COLORS['gray-bright']} />
        </Div>
      </Div>
    </>
  );
};

export default Toggler;
