// CreateJob.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const CreateJob = () => {
  const navigation = useNavigation();
  const [jobData, setJobData] = useState({
    title: '',
    workplace: '',
    location: '',
    employmentType: '',
    jobDescription: '',
    skillsRequired: '',
  });

  const handleSubmit = () => {
    
  };

  const handlePreview = () => {
    navigation.navigate('JobPreview', { jobData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Create Job</Text>
      {/* Job Title Input */}
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, title: text})}
      />
      
      {/* Workplace Input */}
      <TextInput
        style={styles.input}
        placeholder="Workplace (remote, hybrid, onsite)"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, workplace: text})}
      />
      {/* Location Input */}
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, location: text})}
      />
      {/* Employment Type Input */}
      <TextInput
        style={styles.input}
        placeholder="Employment Type (Fulltime, Part Time, Contract, Temporary, Internship)"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, employmentType: text})}
      />
      {/* Job Description Input */}
      <TextInput
        style={[styles.input, { height: 100 }]} // Increase height for description input
        placeholder="Add Job Description"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, jobDescription: text})}
        multiline={true}
      />
      {/* Skills Required Input */}
      <TextInput
        style={[styles.input, { height: 100 }]} // Increase height for skills input
        placeholder="Add Skills required"
        placeholderTextColor="#000"
        onChangeText={(text) => setJobData({...jobData, skillsRequired: text})}
        multiline={true}
      />
      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handlePreview}>
        <Text style={styles.submitButtonText}>View Preview</Text>
      </TouchableOpacity>
    </View>
  );
};




export default CreateJob;
