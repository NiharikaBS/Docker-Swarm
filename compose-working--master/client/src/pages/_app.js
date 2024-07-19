import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/root/src/store';

import BaseTemplate from '@/baseComponents/PageParts/BaseTemplate';

import 'basedesign-iswad/dist/styles.min.css';
import '@/styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <BaseTemplate>
        <Component {...pageProps} />
      </BaseTemplate>
    </Provider>
  );
};

export default MyApp;
