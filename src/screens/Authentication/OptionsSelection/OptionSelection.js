import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './OptionStyles';
import { firebase } from '../../../firebase/config';

export default function OptionsSelection({ navigation }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');
  const userID = firebase.auth().currentUser.uid;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await firebase.firestore().collection('users').doc(userID).get();
        const userData = userDoc.data();
        if (userData) {
          setUserName(userData.fullName);
          setUserRole(userData.role);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userID]);

  const handleRolePress = async (role) => {
    if (userRole) {
      return;
    }

    setSelectedRole(role);

    try {
      // Update user's document with option selection details
      const userDocRef = firebase.firestore().collection('users').doc(userID);
      await userDocRef.update({ role });
      setUserRole(role);
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const onNextPress = () => {
    navigation.navigate('JobSelection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>I'm an</Text>

      <View style={styles.RoleContainer}>
        <TouchableOpacity
          style={[
            styles.optionBtn,
            {
              backgroundColor:
                selectedRole === 'Undergraduate' ? '#019F99' : '#fff',
            },
          ]}
          onPress={() => handleRolePress('Undergraduate')}
          disabled={selectedRole === 'Undergraduate'}>
          <Text
            style={[
              styles.optionText,
              {
                color:
                  selectedRole === 'Undergraduate' ? '#fff' : '#019F99',
              },
            ]}>
            Undergraduate
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionBtn,
            {
              backgroundColor:
                selectedRole === 'Employer' ? '#019F99' : '#fff',
            },
          ]}
          onPress={() => handleRolePress('Employer')}
          disabled={selectedRole === 'Employer'}>
          <Text
            style={[
              styles.optionText,
              {
                color: selectedRole === 'Employer' ? '#fff' : '#019F99',
              },
            ]}>
            Employer
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../../assets/images/login.png')}
        style={styles.logo}
      />

      <View style={styles.nextbtn}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={onNextPress}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
