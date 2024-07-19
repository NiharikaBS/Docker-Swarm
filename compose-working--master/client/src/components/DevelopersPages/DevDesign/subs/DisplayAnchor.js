import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';

import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayAnchor() {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className={cx('p-all-1 width-per-90 flex--wrap', styles.card)}>
        <Div>
          <Div>
            {Object.keys(ANCHOR_TYPES)?.map((item, idx) => (
              <Anchor anchorType={ANCHOR_TYPES[item]} key={idx} className="m-x-16" to="/">
                Internal Anchor Type {ANCHOR_TYPES[item]}
              </Anchor>
            ))}
          </Div>
        </Div>
        <Div>
          <Div className="m-all-32">
            {Object.keys(ANCHOR_TYPES)?.map((item, idx) => (
              <Anchor
                anchorType={ANCHOR_TYPES[item]}
                key={idx}
                className="m-x-16"
                to="https://www.google.com"
                internal={false}>
                External Anchor Type {ANCHOR_TYPES[item]}
              </Anchor>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
}

export default DisplayAnchor;
