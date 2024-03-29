// This block defines the Dashboard component
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OngoingApplications, ClosedApplications } from '../../../../Navigation/EmployerView/JobList';

const Tab = createMaterialTopTabNavigator();

const ApplicationsReceived = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ongoing Applications" component={OngoingApplications} />
      <Tab.Screen name="Closed Applications" component={ClosedApplications} />
    </Tab.Navigator>
  );
};

export default ApplicationsReceived;
