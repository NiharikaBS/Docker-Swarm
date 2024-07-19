import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../DraggableFileUploader.module.scss';

const DefaultDraggableElement = ({
  file,
  iconType,
  setOpenFileBrowser,
  acceptableFileString,
  removeFileClickHandler
}) => {
  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        className={cx(
          'width-per-100 height-px-100 bg-white box-shadow-type-one p2 br-rad-px-10',
          styles.draggableElementContainer
        )}>
        {!file?.length ? (
          <Div type="flex" direction="vertical" hAlign="center">
            <Icon
              type={iconType}
              scale={3}
              color={COLORS['theme-one']}
              className="width-px-70 height-px-80 mouse-hand"
              onClick={() => setOpenFileBrowser(true)}
            />
            <Div className="fs-px-12 text-gray-dark">{acceptableFileString}</Div>
          </Div>
        ) : (
          <Div type="flex" hAlign="center" vAlign="center" className="width-per-100 p-all-2">
            <Div type="flex" hAlign="center" vAlign="center" className="width-per-100 pos-rel">
              <Div className="one-line f-s-px-12 width-per-100">{file?.[0]?.name}</Div>
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                className="width-px-30 height-px-30 mouse-hand"
                onClick={removeFileClickHandler}>
                <Icon type="trash" color={COLORS.danger} />
              </Div>
            </Div>
          </Div>
        )}
      </Div>
    </>
  );
};

export default DefaultDraggableElement;
