import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/ReusableComps/Icon';
import HeightTransitionEffect from '@/baseComponents/ReusableComps/HeightTransitionEffect';

import InfoModal from './InfoModal';
import styles from '../ApiDoc.module.scss';

const Item = ({ category, endpoints, info, setInfoModalContext }) => {
  const [categoryIsActive, setCategoryIsActive] = useState(false);
  const [activeSubItems, setActiveSubItems] = useState({});

  useEffect(() => {
    let idx = 0;
    const localActiveSubItems = { ...activeSubItems };
    endpoints?.forEach((item) => {
      localActiveSubItems[idx] = false;
      idx += 1;
    });
    setActiveSubItems(localActiveSubItems);
  }, [endpoints]);

  return (
    <>
      <Div className={cx('width-per-100 text-black', styles.itemContainer)}>
        <Div
          type="flex"
          distributedBetween
          vAlign="center"
          className={cx('p-all-16 bg-blue text-white mouse-hand f-b text-title')}
          onClick={() => setCategoryIsActive(!categoryIsActive)}>
          <Div>{category}</Div>
          {info && (
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className={'mouse-hand z-10 width-px-30 height-px-30'}
              onClick={() => setInfoModalContext(info)}>
              <Icon type="question-circle" color="white" scale={1.5} />
            </Div>
          )}
        </Div>
        <HeightTransitionEffect isActive={categoryIsActive}>
          <Div>
            {endpoints?.map((item, idx) => (
              <Div
                key={idx}
                className={cx(
                  'p-all-16 m-all-16 br-rad-px-10 mouse-hand',
                  styles[`item${item?.method?.toUpperCase()}CategoryContainer`]
                )}
                onClick={() => {
                  const localActiveSubItems = { ...activeSubItems };
                  localActiveSubItems[idx] = !localActiveSubItems[idx];
                  setActiveSubItems(localActiveSubItems);
                }}>
                <Div
                  type="flex"
                  distributedBetween
                  vAlign="center"
                  className={cx(
                    'flex--wrap text-title',
                    styles[`item${item?.method?.toUpperCase()}Container`]
                  )}>
                  <Div className="f-b">{item?.title}</Div>
                </Div>
                <HeightTransitionEffect isActive={activeSubItems[idx]} className="">
                  <Div className="m-y-16 br-bottom-solid-3 br-top-solid-3 p-y-16">
                    <span className="f-b m-r-16">Method</span> {item?.method}
                  </Div>
                  <Div className="m-b-16 br-bottom-solid-3 p-y-16">
                    <span className="f-b m-r-16">URL</span> {item?.url}
                  </Div>

                  <Div className="m-b-16 br-bottom-solid-3 p-y-16">
                    <span className="f-b m-r-16">Authorized Groups</span>{' '}
                    {JSON.stringify(item?.authorizedGroups, null, 2)}
                  </Div>
                  {item?.headerParams?.length >= 1 && (
                    <Div className={'br-bottom-solid-3'}>
                      <Div className="m-y-16 f-b">Header Params</Div>
                      <Div className="m-l-16">
                        {item?.headerParams?.map((param, idx) => (
                          <Div key={idx} className="m-b-16">
                            <Div>
                              <span className={cx('f-b', param?.isRequired && 'required')}>
                                {param?.name}
                              </span>
                              <span className="m-l-16">{`<${param?.type}>`}</span>
                            </Div>
                            <Div className="m-t-8 m-l-16 f-s-px-14">{param?.description}</Div>
                          </Div>
                        ))}
                      </Div>
                    </Div>
                  )}

                  {item?.bodyParams?.length >= 1 && (
                    <Div className={'br-bottom-solid-3'}>
                      <Div className="m-y-16 f-b">Body Params</Div>
                      <Div className="m-l-16">
                        {item?.bodyParams?.map((param, idx) => (
                          <Div key={idx} className="m-b-16">
                            <Div>
                              <span className={cx('f-b', param?.isRequired && 'required')}>
                                {param?.name}
                              </span>
                              <span className="m-l-16">{`<${param?.type}>`}</span>
                            </Div>
                            <Div className="m-t-8 m-l-16 f-s-px-14">{param?.description}</Div>
                          </Div>
                        ))}
                      </Div>
                    </Div>
                  )}

                  {item?.queryParams?.length >= 1 && (
                    <Div className={'br-bottom-solid-3'}>
                      <Div className="m-y-16 f-b">Query Params</Div>
                      <Div className="m-l-16">
                        {item?.queryParams?.map((param, idx) => (
                          <Div key={idx} className="m-b-16">
                            <Div>
                              <span className={cx('f-b', param?.isRequired && 'required')}>
                                {param?.name}
                              </span>
                              <span className="m-l-16">{`<${param?.type}>`}</span>
                            </Div>
                            <Div className="m-t-8 m-l-16 f-s-px-14">{param?.description}</Div>
                          </Div>
                        ))}
                      </Div>
                    </Div>
                  )}
                  {item?.description && (
                    <Div className={'br-bottom-solid-3 p-b-16'}>
                      <Div className="m-y-16 f-b">Description</Div>
                      <Div className="m-l-16">{item?.description}</Div>
                    </Div>
                  )}
                  <Div className="m-y-16 f-b">Responses</Div>
                  {item?.responses?.map((response, idx) => (
                    <Div
                      key={idx}
                      className={cx(
                        'm-b-32 p-all-16',
                        response?.type?.toUpperCase() === 'SUCCESS'
                          ? styles.itemResponseSuccessContainer
                          : styles.itemResponseErrorContainer
                      )}>
                      <Div className="m-b-16">Type: {response?.type}</Div>
                      <Div className="m-b-16">Code: {response?.code}</Div>
                      <Div>
                        <Div className="m-b-16">Response Sample:</Div>
                        <pre>{JSON.stringify(response?.ex || {}, null, 2)}</pre>
                        <Div className="m-y-16">{response?.description}</Div>
                      </Div>
                    </Div>
                  ))}
                </HeightTransitionEffect>
              </Div>
            ))}
          </Div>
        </HeightTransitionEffect>
      </Div>
    </>
  );
};

export default Item;
