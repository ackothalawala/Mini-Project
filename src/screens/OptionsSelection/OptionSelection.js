import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './OptionStyles';
import { firebase } from '../../firebase/config';


export default function OptionsSelection({ navigation, route }) {
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
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userID]);

  useEffect(() => {
    if (route.params && route.params.user) {
      setUserName(route.params.user.fullName);
    }
  }, [route.params]);

  const handleRolePress = async (role) => {
    if (userRole) {
      return;
    }

    setSelectedRole(role);

    try {
      const userDocRef = firebase.firestore().collection('UsersRole').doc(userID);
      await userDocRef.set({ userId: userID, role, fullName: userName });
      setUserRole(role);
    } catch (error) {
      console.error('Error updating user role:', error);
    }
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
        source={require('../../assets/images/login.png')}
        style={styles.logo}
      />

      <View style={styles.nextbtn}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}