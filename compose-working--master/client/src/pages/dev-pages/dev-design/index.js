import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import DevDesign from '@/components/DevelopersPages/DevDesign';

import { USER_GROUPS } from '@/constants/userGroups';
import { PRODUCTION } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute
      hasAccessRole={PRODUCTION ? [USER_GROUPS.APP_ADMIN, USER_GROUPS.DEVELOPER] : 'Public'}>
      <Seo>
        <PageContainer
          pageIdentifier="dev-design"
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <DevDesign />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
