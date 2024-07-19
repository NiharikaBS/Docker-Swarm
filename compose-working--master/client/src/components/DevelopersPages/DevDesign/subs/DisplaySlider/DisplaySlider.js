import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Text, Heading } from 'basedesign-iswad';

import Slider from '@/baseComponents/ReusableComps/Slider';

import styles from '../../DevDesign.module.scss';

function DisplaySlider() {
  const [sliderVal, setSliderVal] = useState(0);
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        hAlign="center"
        className={cx('p1 width-per-90 flex--wrap', styles.card)}>
        <Slider sliderVal={sliderVal} setSliderVal={setSliderVal} />
      </Div>
    </>
  );
}

export default DisplaySlider;
