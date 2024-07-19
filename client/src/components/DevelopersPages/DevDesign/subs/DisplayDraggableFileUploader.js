import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import DraggableFileUploader from '@/baseComponents/FormComps/DraggableFileUploader';

import styles from '../DevDesign.module.scss';

const INPUT_ID = 'testId';

function DisplayDraggableFileUploader() {
  const [file, setFile] = useState();

  useEffect(() => {
    if (file) {
      console.log(file);
    }
  }, [file]);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-1 width-per-90 flex--wrap', styles.card)}>
        <DraggableFileUploader
          file={file}
          setFile={setFile}
          acceptableFileType=".csv"
          inputId={INPUT_ID}
          iconType="dashboard"
        />
      </Div>
    </>
  );
}

export default DisplayDraggableFileUploader;
