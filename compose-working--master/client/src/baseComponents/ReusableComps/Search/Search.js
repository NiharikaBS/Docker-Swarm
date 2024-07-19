import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';

import styles from './Search.module.scss';

const Search = React.forwardRef(
  ({ closable = true, iconColor = 'gray', className, containerClassName, ...props }, ref) => {
    const [activeSearch, setActiveSearch] = useState(false);

    useEffect(() => {
      if (!closable) {
        setActiveSearch(true);
      }
    }, [closable]);

    return (
      <>
        <Div className={cx('flex')}>
          <Div
            className={cx(
              'min-height-px-30 min-width-px-30 br-rad-px-50 bg-white flex flex--jc--center flex--ai--center m-l-8 box-shadow-type-one',
              styles.container,
              containerClassName
            )}>
            {closable ? (
              <Div
                type="flex"
                hAlign="center"
                vAlign="center"
                onClick={() => setActiveSearch(!activeSearch)}
                className="mouse-hand width-px-30 height-px-30 br-rad-px-50 bg-silver">
                <Icon type={activeSearch ? 'close' : 'search'} scale={0.8} color="gray" />
              </Div>
            ) : (
              <Div className="mouse-hand">
                <Icon
                  type="search"
                  scale={0.8}
                  color="gray"
                  className={cx(closable && 'mouse-hand')}
                />
              </Div>
            )}
            <input
              type="text"
              className={cx(styles.input, activeSearch && styles.inputActive, className)}
              {...props}
            />
          </Div>
        </Div>
      </>
    );
  }
);

export default Search;
