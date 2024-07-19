import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/ReusableComps/Button';

import { addAlertItem } from '@/utils/notifications';
import { ALERT_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayColors() {
  const dispatch = useDispatch();

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-1 width-per-90 flex--wrap', styles.card)}>
        {Object.keys(ALERT_TYPES)?.map((item, idx) => (
          <Button
            key={idx}
            className={'m-l-auto m-r-auto m-b-8 max-width-px-300'}
            onClick={() =>
              addAlertItem(
                dispatch,
                `This is a sample of ${item} alert, hope it looks good to you!`,
                ALERT_TYPES[item]
              )
            }>
            Show {ALERT_TYPES[item]} alert
          </Button>
        ))}
      </Div>
    </>
  );
}

export default DisplayColors;
