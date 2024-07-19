import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';
import { LIST_OF_ICONS } from '@/constants/devDesignVars';

import styles from './Close.module.scss';

const Close = ({
  type = 1,
  barColor = COLORS['theme-three'],
  iconColor = COLORS['gray-dark'],
  iconBgColor = COLORS['gray-bright'],
  barHeight = '40px',
  iconScale = 1,
  iconCircleSize = 20,
  headerText = '',
  className,
  ...props
}) => {
  return (
    <>
      {type === 1 && (
        <Div
          type="flex"
          vAlign="center"
          className={cx('pos-rel width-per-100')}
          style={{ backgroundColor: barColor, height: barHeight }}
          distributedBetween>
          <Div className="text-white f-b m-l-16">{headerText}</Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('pos-abs mouse-hand br-rad-per-50', styles.close, className)}
            style={{
              backgroundColor: iconBgColor,
              width: iconCircleSize,
              height: iconCircleSize,
              borderColor: iconBgColor
            }}
            {...props}>
            <Icon type={LIST_OF_ICONS['close']} scale={iconScale} color={iconColor} />
          </Div>
        </Div>
      )}
    </>
  );
};

export default Close;
