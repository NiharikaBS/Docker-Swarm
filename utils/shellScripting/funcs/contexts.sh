getJsContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    echo """import React from \"react\";
import cx from \"classnames\";
import { Div } from \"basedesign-iswad\";

import styles from \"./$compName.module.scss\";

const $compName = () => {
  return (
    <>
      <Div>$compName</Div>
    </>
  );
};

export default $compName;
"""
}

getJsPageContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    echo """import React from \"react\";
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Home from '@/components/PublicWebPages/Home';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo>
        <PageContainer
          pageIdentifier='home'
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <Home />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
"""
}

getAppsContext() {
local appName=$1

echo """from django.apps import AppConfig


class AppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = '$appName'
"""
}

getUrlsContext() {
echo """from django.urls import path, include
from rest_framework import routers
"""
}

getTestFileContext() {
  local compName=$1

  echo """import React from \"react\";
import { render as renderRTL, screen, fireEvent } from \"@testing-library/react\";
import $compName from \"../$compName\";
import * as reactRedux from \"react-redux\";
import { BrowserRouter } from \"react-router-dom\";

const render = (component) =>
  renderRTL(<BrowserRouter>{component}</BrowserRouter>);

jest.mock(\"react-redux\", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe(\"Test $compName Component\", () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test(\"\", () => {
    render(<$compName />);

    expect(screen.getByText(/$compName/i)).toBeInTheDocument();
  });
});

"""
}

getCardContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    echo """import React from \"react\";
import cx from \"classnames\";
import { Div } from \"basedesign-iswad\";

import styles from \"../Card.module.scss\";

const $compName = () => {
  return (
    <>
      <Div>$compName</Div>
    </>
  );
};

export default $compName;
"""
}

getDevCardFileContext() {
  local compName=$1

  echo """import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const $compName = ({ ...props }) => {
  return (
    <>
      <Div
        direction='vertical'
        type='flex'
        hAlign='center'
        vAlign='center'
        className='m-b-32 width-px-350'
        {...props}>
        <Div className='m-b-8'>Type: {CARD_TYPES.serviceTest}</Div>
        <Card type={CARD_TYPES.serviceTest} />
      </Div>
    </>
  );
};

export default $compName;
"""
}



getModalContext() {
  local compName=$1

  echo """import React, { useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { setModalHeader } from '@/reducers/general/modalHeader';
import { clearModal } from '@/utils/modal';

import styles from '../Modal.module.scss';

const $compName = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModalHeader('Confirm Action'));
  }, []);

  return (
    <>
      <Div>Hello</Div>
    </>
  );
};

export default $compName;
"""
}


getDevModalContext() {
  local compName=$1

  echo """import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/ReusableComps/Button';

import { MODAL_TYPES } from '@/constants/devDesignVars';
import { setModalType } from '@/reducers/general/modalType';
import { setModalProps } from '@/reducers/general/modalProps';

import styles from '../../../DevDesign.module.scss';

const $compName = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        className={'width-px-300 m-l-auto m-r-auto m-b-8'}
        onClick={() => {
          dispatch(setModalProps({ }));
          dispatch(setModalType(MODAL_TYPES['prompt-message']));
        }}
      >
        Show moal of type {MODAL_TYPES['prompt-message']}
      </Button>
    </>
  );
};

export default $compName;

"""
}
