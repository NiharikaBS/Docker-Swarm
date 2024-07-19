import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import ServiceCard from './subs/ServiceCard';
import styles from './Card.module.scss';

const Card = ({ type, ...props }) => {
  return <>{type === CARD_TYPES.serviceTest && <ServiceCard {...props} />}</>;
};

export default Card;
