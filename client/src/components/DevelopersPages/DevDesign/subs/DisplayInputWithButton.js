import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import InputWithButton from '@/baseComponents/FormComps/InputWithButton';

import styles from '../DevDesign.module.scss';

function DisplayInputWithButton() {
  const [val, setVal] = useState('');

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        <InputWithButton
          val={val}
          setVal={setVal}
          placeHolder="Email"
          name="email"
          id="test-email"
          btnText="Submit"
        />
      </Div>
    </>
  );
}

export default DisplayInputWithButton;
