import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/ReusableComps/Button';
import PngIcon from '@/baseComponents/ReusableComps/PngIcon';

import { PNG_ICON_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayPngIcon() {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        {Object.keys(PNG_ICON_TYPES)?.map((item, idx) => (
          <PngIcon
            type={PNG_ICON_TYPES[item]}
            key={idx}
            width={20}
            height={20}
            className="m-r-16"
          />
        ))}
      </Div>
    </>
  );
}

export default DisplayPngIcon;
