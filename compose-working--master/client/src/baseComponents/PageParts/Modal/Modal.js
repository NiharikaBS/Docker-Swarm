import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Modal as BaseModal } from 'basedesign-iswad';

import Close from '@/baseComponents/ReusableComps/Close';

import { COLORS } from '@/constants/vars';
import { clearModal } from '@/utils/modal';
import { MODAL_TYPES } from '@/constants/devDesignVars';

import { HAS_CCELEBERATION_BG_TYPES } from './constans';
import PromptMessage from './subs/PromptMessage';
import styles from './Modal.module.scss';

const Modal = () => {
  const dispatch = useDispatch();

  const modalType = useSelector((state) => state.modalType);
  const modalProps = useSelector((state) => state.modalProps);
  const header = useSelector((state) => state.modalHeader);

  return (
    <>
      {modalType && (
        <BaseModal
          fullHeightclassName={cx(
            'ModalMainClickableZIndex',
            HAS_CCELEBERATION_BG_TYPES.includes(modalType) && styles.celeberationBg,
            HAS_CCELEBERATION_BG_TYPES.includes(modalType)
              ? 'bg-theme-five op-90'
              : 'bg-black op-50'
          )}
          className={cx(
            'pos-rel width-per-80 bax-shadow-type-one bg-white br-rad-px-10 of-hidden ModalContainerZIndex',
            styles.modalContainer
          )}>
          <Div type="flex" direction="vertical" hAlign="start" className="">
            <Close
              barColor={
                HAS_CCELEBERATION_BG_TYPES.includes(modalType)
                  ? COLORS['success']
                  : COLORS['theme-one']
              }
              headerText={header}
              onClick={() => clearModal(dispatch)}
              iconScale={0.7}
            />
            <Div
              type="flex"
              direction="vertical"
              hAlign="start"
              className={cx('of-y-auto scroll-type-one p-all-16', styles.mainContentContainer)}>
              {modalType === MODAL_TYPES['prompt-message'] && <PromptMessage {...modalProps} />}
            </Div>
          </Div>
        </BaseModal>
      )}
    </>
  );
};

export default Modal;
