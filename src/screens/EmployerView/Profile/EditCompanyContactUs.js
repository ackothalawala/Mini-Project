import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const EditCompanyContactUs = () => {
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');

    const validateForm = () => {
        const errors = {};
        if (!email) errors.email = 'Email is required';
        if (!address) errors.address = 'Address is required';
        if (!PhoneNumber) errors.phoneNumber = 'PhoneNumber is required';
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
      };

  return (
    
      <View style={[style.card, style.text]}>
      <Text style={[styles.heading]}>Email</Text>
      <TextInput
        placeholder="Add Email"
        placeholderTextColor="#808080"
        autoCorrect={false}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text style={[styles.heading]}>Address</Text>
      <TextInput
        placeholder="Add Address"
        placeholderTextColor="#808080"
        autoCorrect={false}
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <Text style={[styles.heading]}>PhoneNumber</Text>
      <TextInput
        placeholder="Add PhoneNumber"
        placeholderTextColor="#808080"
        autoCorrect={false}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      
      <Button title = "Save" onPress={handleSave}/>
    </View>
  )
}