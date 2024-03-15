// This block defines the Dashboard component
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OngoingApplications, ClosedApplications } from '../../../../Navigation/EmployerView/JobList';

const Tab = createMaterialTopTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="OngoingApplications" component={OngoingApplications} />
      <Tab.Screen name="ClosedApplications" component={ClosedApplications} />
    </Tab.Navigator>
  );
};

export default Dashboard;
