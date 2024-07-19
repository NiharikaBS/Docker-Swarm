import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Paragraph, Alert as BaseAlert, AlertItem } from 'basedesign-iswad';

import Close from '@/baseComponents/ReusableComps/Close';
import Icon from '@/baseComponents/ReusableComps/Icon';

import { COLORS } from '@/constants/vars';
import { removeAlertItem } from '@/utils/notifications';
import { LIST_OF_ICONS } from '@/constants/devDesignVars';

import styles from './Alert.module.scss';

const Alert = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  return (
    <>
      <BaseAlert
        className={cx(
          'AlertContainerZIndex pos-fix pos-fix--rt min-width-per-50 max-width-per-80'
        )}>
        {notifications.map((notif) => (
          <AlertItem
            key={notif.key}
            isActive={notif.isActive}
            className={cx(
              'm-ll-1 box-shadow-type-one br-rad-px-5 transition-type-one m-b-8 p-b-8',
              notif?.type === 'success' && 'br-all-solid-3 br-success-two bg-success-one',
              notif?.type === 'error' && 'br-all-solid-3 bg-warning-one br-warning-two',
              notif?.type === 'warning' && 'br-all-solid-3 bg-warning-one br-warning-two',
              styles.item
            )}
            activeClassName={cx(styles.itemIsActive)}>
            <Div className="width-per-100" type="flex" distributedBetween>
              <Div type="flex" vAlign="center" className="p-all-16 width-per-100">
                <Div
                  type="flex"
                  hAlign="center"
                  vAlign="center"
                  className={cx(
                    'width-px-50 height-px-50 br-rad-per-50 br-all-solid-3',
                    notif?.type === 'success' ? 'br-success-two' : 'br-warning-two'
                  )}>
                  <Icon
                    type={
                      notif?.type === 'success'
                        ? LIST_OF_ICONS['check']
                        : notif?.type === 'error'
                        ? LIST_OF_ICONS['close']
                        : LIST_OF_ICONS['close']
                    }
                    scale={2}
                    color={
                      notif?.type === 'success' ? COLORS['success-two'] : COLORS['warning-two']
                    }
                  />
                </Div>
                <Div className="m-l-16">
                  <Div className="global-font-title f-b text-large">
                    {notif?.type === 'success' ? 'Success!' : ''}
                    {notif?.type === 'warning' ? 'Warning!' : ''}
                    {notif?.type === 'error' ? 'Oh Oh!' : ''}
                  </Div>

                  <Paragraph className="m-t-8 max-width-px-500">{notif.message}</Paragraph>
                </Div>
              </Div>

              <Div className="width-px-30">
                <Close
                  barHeight="30px"
                  barColor=""
                  iconColor={COLORS['gray-dark']}
                  iconScale={0.8}
                  onClick={() => removeAlertItem(dispatch, notif.key)}
                />
              </Div>
            </Div>
          </AlertItem>
        ))}
      </BaseAlert>
    </>
  );
};

export default Alert;
