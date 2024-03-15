// This block defines the OngoingApplications and ClosedApplications components
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import styles from './styles'; // Import the provided styles

const ApplicationsReceived = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.jobCard}>
            <View style={styles.titleContainer}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text>{item.company}</Text>
              <Text>{item.appliedDate}</Text>
            </View>
            {/* Move the Button outside the titleContainer */}
            <Button title="See More" onPress={() => { /* handle See More button click */ }} />
          </View>
        </View>
      )}
    />
  );
};

export const OngoingApplications = () => {
  const data = [
    { id: '1', title: 'Job 1', company: 'Company A', appliedDate: '2022-01-01' },
  ];

  return <ApplicationsReceived data={data} />;
};

export const ClosedApplications = () => {
  const data = [
    { id: '1', title: 'Job 2', company: 'Company B', appliedDate: '2022-01-02' },
  ];

  return <ApplicationsReceived data={data} />;
};
