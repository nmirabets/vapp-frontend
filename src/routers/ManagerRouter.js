import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import DashboardPage from '../pages/manager/dashboard/DashboardPage';
import AdminMenuPage from '../pages/manager/menu/SetMenus';
import SettingsPage from '../pages/manager/settings/SettingsPage';
import SelectRestaurantPage from '../pages/manager/settings/SelectRestaurantPage';
import EditDetailRestaurantPage from '../pages/manager/settings/EditDetailRestaurantPage';
import EditRestaurantPage from '../pages/manager/settings/EditRestaurantPage';
import NotFoundPage from '../pages/website/NotFound';
import ManagerProvider from '../providers/ManagerProvider';

function ManagerRouter() {
  const { url } = useRouteMatch();
  return (
    <ManagerProvider>
      <Switch>
        <Route path={`${url}/dashboard`} component={DashboardPage} />
        <Route path={`${url}/menu`} component={AdminMenuPage} />
        <Route path={`${url}/settings/restaurant-selection`} component={SelectRestaurantPage} />
        <Route path={`${url}/settings/restaurant-edit-detail`} component={EditDetailRestaurantPage} />
        <Route path={`${url}/settings/restaurant-edit`} component={EditRestaurantPage} />
        <Route path={`${url}/settings`} component={SettingsPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </ManagerProvider>
  );
}

export default ManagerRouter;