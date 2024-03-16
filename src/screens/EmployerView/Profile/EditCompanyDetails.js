import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

import styles from './Style';
const EditCompanyDetails = () => {
  const [aboutUs, setAboutUs] = useState('');
  const [mission, setMission] = useState('');
  const [vision, setVision] = useState('');
  const [save, setSave] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    // Your form submission logic goes here
    console.log('Submitted');
  };

const handleSave = () => {
  
}

  return (
    <View style={[styles.card, styles.text, styles.container]}>
      <Text style={[styles.heading]}>About Us</Text>
      <TextInput style={styles.textinput}
        placeholder="Add About Us"
        placeholderTextColor="#808080"
        autoCorrect={false}
        multiline={true} 
        value={aboutUs}
        onChangeText={text => setAboutUs(text)}
      />

      <Text style={[styles.heading]}>Mission</Text>
      <TextInput style={styles.textinput}
        placeholder="Add Mission"
        placeholderTextColor="#808080"
        autoCorrect={false}
        multiline={true} 
        value={mission}
        onChangeText={text => setMission(text)}
      />

      <Text style={[styles.heading]}>Vision</Text>
      <TextInput style={styles.textinput}
        placeholder="Add Vision"
        placeholderTextColor="#808080"
        autoCorrect={false}
        multiline={true} 
        value={vision}
        onChangeText={text => setVision(text)}
      />
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.SaveButton} onPress={this.handleSave}>
          <Text style={styles.SaveButtonText}>Save</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default EditCompanyDetails;
