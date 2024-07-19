import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Image from 'next/image';

import DivWidthDynamic from '../DivWidthDynamic';

import ImageLoader from './subs/ImageLoader';
import styles from './AppImage.module.scss';

// note that we have a prop called "loading" that can get the following values:
// 1. "Lazy": Loads the image after browser scrolls to it
// 2. "eager": Loads the image as soon as the page is loaded
// 3. "auto": The browser decide what happens, and this is the default value for browser
// IMPORTANT NOTE:
// The parent container of the image must have a relative position
const AppImage = ({
  type = 1,
  width = 0,
  height = 0,
  heightOverWidthAsprctRatio = 1,
  objectFit = 'cover',
  ...props
}) => {
  const [loading, setLoading] = useState(true);

  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <>
      <DivWidthDynamic setContainerWidth={setContainerWidth} type="flex" className="pos-rel">
        <Image
          width={width ? width : containerWidth}
          height={height ? height : containerWidth * heightOverWidthAsprctRatio}
          objectFit={objectFit}
          {...props}
          onLoad={() => setLoading(false)}
        />

        {loading && (
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx('pos-abs pos-abs--center width-per-100 height-per-100', styles.spinner)}>
            <ImageLoader type={type} />
          </Div>
        )}
      </DivWidthDynamic>
    </>
  );
};

export default AppImage;
