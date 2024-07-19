import React from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter } from 'basedesign-iswad';
import Image from 'next/image';

import styles from '../Card.module.scss';

const ServiceCard = ({ className, ...props }) => {
  return (
    <>
      <Div
        {...props}
        className={cx(
          'box-shadow-type-one bg-white br-rad-px-10 of-y-hidden of-x-hidden p-all-16',
          className
        )}>
        TestCard
      </Div>
    </>
  );
};

export default ServiceCard;
