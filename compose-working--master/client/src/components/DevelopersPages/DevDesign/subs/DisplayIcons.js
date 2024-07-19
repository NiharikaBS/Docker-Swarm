import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { LIST_OF_ICONS } from '@/constants/devDesignVars';
import { COLORS } from '@/constants/vars';

import styles from '../DevDesign.module.scss';

function DisplayIcons() {
  return (
    <>
      <Div className={cx('width-per-90', styles.iconsContainer, styles.card)}>
        {Object.keys(LIST_OF_ICONS)?.map((item, idx) => (
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="m-all-16 br-all-solid-1 br-black p-all-8"
            key={idx}>
            <Div className="m-r-8">{LIST_OF_ICONS[item]}</Div>
            <Div type="flex">
              {Object.keys(COLORS).map((c, idx2) => (
                <Div type="flex" vAlign="center" hAlign="center" key={idx2} className="m-r-8">
                  <Icon type={LIST_OF_ICONS[item]} color={COLORS[c]} scale={1.25} />
                </Div>
              ))}
            </Div>
          </Div>
        ))}
      </Div>
    </>
  );
}

export default DisplayIcons;
