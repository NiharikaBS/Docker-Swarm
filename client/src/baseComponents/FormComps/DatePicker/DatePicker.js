import React from 'react';
import cx from 'classnames';
import { default as BaseDatePicker } from 'react-datepicker';
import { Div } from 'basedesign-iswad';

import Label from '@/baseComponents/FormComps/Label';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './DatePicker.module.scss';

const DatePicker = ({
  className,
  isRequired,
  labelText,
  chosenDate,
  setChosenDate,
  dateFormat = 'dd-MM-yyyy',
  yearDropdownItemNumber = 100,
  showYearDropdown = true,
  showMonthDropdown = false,
  errorMessage,
  errorHandler,
  placeHolder,
  showTimeSelect = false,
  showTimeSelectOnly = false,
  hasMarginBottom = true
}) => {
  return (
    <>
      <Div
        className={cx('pos-rel', hasMarginBottom && 'm-b-32', className)}
        onClick={() => errorHandler('')}>
        {labelText && <Label labelText={labelText} isRequired={isRequired} />}
        <Div className={cx('customDatePickerWidth')}>
          <BaseDatePicker
            selected={chosenDate}
            onChange={(date) => setChosenDate(date)}
            className={cx(
              'width-per- p-y-16 p-x-8 br-none global-outline-none box-shadow-type-one width-per-100 text-gray br-rad-px-10'
            )}
            dateFormat={dateFormat}
            yearDropdownItemNumber={yearDropdownItemNumber}
            scrollableYearDropdown={true}
            showYearDropdown={showYearDropdown}
            showMonthDropdown={showMonthDropdown}
            placeholderText={placeHolder}
            showTimeSelect={showTimeSelect}
            showTimeSelectOnly={showTimeSelectOnly}
            // timeFormat="HH:mm"
            // timeIntervals={15}
            // timeCaption="Time"
          />
        </Div>
        <Div
          className={cx('global-error-message', errorMessage && 'global-error-message-is-active')}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default DatePicker;
