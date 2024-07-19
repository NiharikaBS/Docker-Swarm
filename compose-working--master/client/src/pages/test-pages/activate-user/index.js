import React from 'react';
import cx from 'classnames';

import ActivateUserComponent from '@/baseComponents/LoginRegister/ActivateUser';
import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import Seo from '@/components/PageWrappers/Seo';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <ActivateUserComponent />
      </Seo>
    </PublicRoute>
  );
};

export function getStaticParams() {
  return ['token'];
}

export default Index;
