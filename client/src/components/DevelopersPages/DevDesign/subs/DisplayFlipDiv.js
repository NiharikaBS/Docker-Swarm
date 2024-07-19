import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import FlipDiv from '@/baseComponents/ReusableComps/FlipDiv';
import FrontSide from '@/baseComponents/ReusableComps/FlipDiv/subs/FrontSide';
import BackSide from '@/baseComponents/ReusableComps/FlipDiv/subs/BackSide';

import styles from '../DevDesign.module.scss';

function DisplayFlipDiv() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        <FlipDiv
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          containerClassName="width-px-300 height-px-300">
          <FrontSide className="bg-red">
            <Div>Hello</Div>
          </FrontSide>
          <BackSide className="bg-blue">
            <Div>Bye</Div>
          </BackSide>
        </FlipDiv>
      </Div>
    </>
  );
}

export default DisplayFlipDiv;
