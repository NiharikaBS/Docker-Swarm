import React from 'react';
import cx from 'classnames';
import { Div, Modal } from 'basedesign-iswad';

import Close from '@/baseComponents/ReusableComps/Close';
import Button from '@/baseComponents/ReusableComps/Button';
import DivConvertTextToHtml from '@/baseComponents/ReusableComps/DivConvertTextToHtml';

import styles from '../ApiDoc.module.scss';
import { COLORS } from '@/constants/vars';

const InfoModal = ({ categoryInfo, setInfoModalContext }) => {
  return (
    <>
      <Modal
        fullHeightclassName={cx('ModalMainClickableZIndex bg-black op-70')}
        className={cx(
          'pos-rel width-per-80 bax-shadow-type-one bg-white br-rad-px-10 of-hidden ModalContainerZIndex',
          styles.modalContainer
        )}>
        <Div type="flex" direction="vertical" hAlign="start" className="">
          <Close barColor="dodgerblue" onClick={() => setInfoModalContext('')} />
          <Div
            type="flex"
            direction="vertical"
            hAlign="start"
            className={cx('of-y-auto scroll-type-one p-all-16', styles.modalMainContentContainer)}>
            <DivConvertTextToHtml
              className={cx('text-justify', styles.modalInfoTextContainer)}
              text={categoryInfo}
            />
          </Div>
        </Div>

        <Div className="p-b-16 p-x-16">
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={
              'bg-blue text-white p-all-16 width-px-80 mouse-hand bg-green-on-hover br-rad-px-5'
            }
            onClick={() => setInfoModalContext('')}>
            OK
          </Div>
        </Div>
      </Modal>
    </>
  );
};

export default InfoModal;
