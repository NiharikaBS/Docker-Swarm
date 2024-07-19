import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/ReusableComps/Button';

import { MODAL_TYPES } from '@/constants/devDesignVars';
import { setModalType } from '@/reducers/general/modalType';
import { setModalProps } from '@/reducers/general/modalProps';

import styles from '../../../DevDesign.module.scss';

const PromptMessage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        className={'width-px-300 m-l-auto m-r-auto m-b-8'}
        onClick={() => {
          dispatch(setModalProps({ message: 'Sample Message!' }));
          dispatch(setModalType(MODAL_TYPES['prompt-message']));
        }}>
        Show moal of type {MODAL_TYPES['prompt-message']}
      </Button>
    </>
  );
};

export default PromptMessage;
