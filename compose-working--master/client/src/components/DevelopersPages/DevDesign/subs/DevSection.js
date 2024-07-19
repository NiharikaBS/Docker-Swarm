import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import HeightTransitionEffect from '@/baseComponents/ReusableComps/HeightTransitionEffect';

import styles from '../DevDesign.module.scss';

const DevSection = ({
  title,
  activeElements,
  setActiveElements,
  isAlwaysActive = false,
  children
}) => {
  const headingOnClick = () => {
    let localActiveElements = [...activeElements];
    if (localActiveElements.includes(title)) {
      localActiveElements = localActiveElements.filter((item) => item !== title);
    } else {
      localActiveElements.push(title);
    }
    setActiveElements(localActiveElements);
  };

  return (
    <>
      <Div
        className="flex flex--jc--center flex--ai--center m-y-8 mouse-hand bg-gray-bright p-all-16 text-black f-s-px-32"
        onClick={headingOnClick}>
        {title}
      </Div>
      <HeightTransitionEffect isActive={isAlwaysActive || activeElements.includes(title)}>
        {children || ''}
      </HeightTransitionEffect>
    </>
  );
};

export default DevSection;
