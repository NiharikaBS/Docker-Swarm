import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ResponsiveSwipeableSlider from '@/baseComponents/ReusableComps/ResponsiveSwipeableSlider';
import ResponsiveSwipeableSliderItem from '@/baseComponents/ReusableComps/ResponsiveSwipeableSlider/subs/ResponsiveSwipeableSliderItem';

import styles from '../DevDesign.module.scss';

const DisplayResponsiveSwipeableSlider = () => {
  const parentRef = useRef();

  const [parentWidth, setParentWidth] = useState(0);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(0);
  const [mustShowSlider, setMustShowSlider] = useState(true);
  const [automaticPlay, setAutomaticPlay] = useState(false);
  const [userSwiped, setUserSwiped] = useState(false);

  useEffect(() => {
    if (parentRef?.current?.clientWidth) {
      setParentWidth(parentRef.current.clientWidth);
    }
  }, [parentRef?.current?.clientWidth]);

  useEffect(() => {
    if (automaticPlay) {
      setTimeout(() => {
        setMoveRight(true);
        setTimeout(() => {
          setAutomaticPlay(false);
        }, 10);
      }, 5000);
    } else if (!automaticPlay && !userSwiped) {
      setTimeout(() => {
        setAutomaticPlay(true);
      }, 5000);
    }
  }, [automaticPlay, userSwiped]);

  return (
    <>
      <Div
        ref={(el) => (parentRef.current = el)}
        className={cx('width-per-100 m-l-auto m-r-auto dir-ltr', styles.landingContainer)}>
        {parentWidth ? (
          <ResponsiveSwipeableSlider
            moveRight={moveRight}
            setMoveRight={setMoveRight}
            moveLeft={moveLeft}
            setMoveLeft={setMoveLeft}
            moveToItemWithNum={moveToItemWithNum}
            setMoveToItemWithNum={setMoveToItemWithNum}
            mustShowSlider={mustShowSlider}
            setMustShowSlider={setMustShowSlider}
            setUserSwiped={setUserSwiped}
            isSwipeable={true}
            isDraggable={true}>
            <ResponsiveSwipeableSliderItem className="pos-rel">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className={cx('bg-blue height-px-40 text-white')}
                style={{ width: parentWidth }}>
                1
              </Div>
            </ResponsiveSwipeableSliderItem>

            <ResponsiveSwipeableSliderItem className="pos-rel">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className={cx('bg-red height-px-40 text-white')}
                style={{ width: parentWidth }}>
                2
              </Div>
            </ResponsiveSwipeableSliderItem>

            <ResponsiveSwipeableSliderItem className="pos-rel">
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className={cx('bg-green height-px-40 text-white')}
                style={{ width: parentWidth }}>
                3
              </Div>
            </ResponsiveSwipeableSliderItem>
          </ResponsiveSwipeableSlider>
        ) : (
          ''
        )}
      </Div>
    </>
  );
};

export default DisplayResponsiveSwipeableSlider;
