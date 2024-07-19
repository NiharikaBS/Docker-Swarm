import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/ReusableComps/Button';

import { isLoading, isLoaded } from '@/reducers/general/loading';

import styles from '../DevDesign.module.scss';

function DisplayLoading() {
  const dispatch = useDispatch();

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        <Button
          className={'width-px-300 m-l-auto m-r-auto m-b-8'}
          onClick={() => {
            dispatch(isLoading());
            setTimeout(() => {
              dispatch(isLoaded());
            }, 5000);
          }}>
          Show Loading for 5 seconds
        </Button>
      </Div>
    </>
  );
}

export default DisplayLoading;
