import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import styles from './styles'; // Import the provided styles
import { useNavigation } from '@react-navigation/native';

const ApplicationsReceived = ({ data }) => {

  const navigation = useNavigation();
  const handleSeeApplicants = () => {
    navigation.navigate('SeeApplicants');
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.jobCard}>
            <View style={styles.titleContainer}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobdetails}>{item.appliedDate}</Text>
              <Text style={styles.NumApplicants}>{item.applicants} Applicants</Text>
            </View>
            <Button title="See Applicants" onPress={handleSeeApplicants} />
          </View>
        </View>
      )}
    />
  );
};

export const OngoingApplications = () => {
  const data = [
    { id: '1', title: 'Associate Software Engineer', company: 'Company A', appliedDate: '2022-01-01', applicants: 5 }, // Sample number of applicants
  ];

  return <ApplicationsReceived data={data} />;
};

export const ClosedApplications = () => {
  const data = [
    { id: '1', title: 'Job 2', company: 'Company B', appliedDate: '2022-01-02', applicants: 10 }, // Sample number of applicants
  ];

  return <ApplicationsReceived data={data} />;
};
