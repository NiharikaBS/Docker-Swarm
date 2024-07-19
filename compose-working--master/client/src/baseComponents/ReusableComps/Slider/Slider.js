import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import Draggable from 'react-draggable';
import { Div } from 'basedesign-iswad';

import styles from './Slider.module.scss';

const Slider = ({ sliderVal, setSliderVal, multiplier = 1 }) => {
  const handleDrag = (e, ui) => {
    const { y } = ui;
    setSliderVal(100 - y);
  };

  return (
    <>
      <Div type="flex" hAlign="center" direction="vertical" className="">
        <Div
          className={cx(
            'width-px-10 bg-gray-dark height-px-100 pos-rel',
            styles.verticalContainer
          )}>
          <Draggable
            axis="y"
            handle="#draggable"
            defaultPosition={{ x: -20, y: 100 - sliderVal }}
            position={null}
            grid={[5, 5]}
            scale={1}
            onDrag={handleDrag}
            bounds={{ top: 0, bottom: 110 - 10 }}>
            <Div
              id="draggable"
              className={cx('width-px-50 height-px-10 bg-black br-rad-px-5 mouse-hand')}
            />
          </Draggable>
        </Div>
        <Div className="width-px-50 bg-gray-dark height-px-10" />
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="width-px-40 height-px-40 f-s-px-20 f-b bg-gray-dark text-white m-t-8">
          {sliderVal * multiplier}
        </Div>
      </Div>
    </>
  );
};

export default Slider;
