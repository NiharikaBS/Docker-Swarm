import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../AppImage.module.scss';

const ImageLoader = ({ type = 1 }) => {
  return (
    <>
      {type === 1 && (
        <Div className="width-px-150 height-px-150">
          <Div className={cx(styles.loading)}></Div>
        </Div>
      )}
      {type === 2 && (
        <Div className="width-px-30 height-px-30">
          <Div className={cx(styles.loading2)}></Div>
        </Div>
      )}
    </>
  );
};

export default ImageLoader;
