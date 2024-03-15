import React, {useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { firebase } from '../../../firebase/config';

const EditWorkExp = () => {
  const [experience, setExperience] = useState([{ name: '', duration: '', organization: '' }]);

  useEffect(() => {
    // Fetch data
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
      userProfileRef.get().then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          if (userData.experience) {
            setExperience(userData.experience);
          }
        } else {
          console.log('No such document!');
        }
      }).catch((error) => {
        console.log('Error getting document:', error);
      });
    }
  }, []);

  const renderExperienceItem = ({ item, index }) => (
    <View style={styles.experienceItem}>
      <TextInput
        placeholder={`Experience Name (${item.name})`}
        placeholderTextColor="#000"
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updateExperience(index, { ...item, name: text })}
      />
      <TextInput
        placeholder={`Duration (${item.duration})`}
        placeholderTextColor="#000"
        style={styles.input}
        value={item.duration}
        onChangeText={(text) => updateExperience(index, { ...item, duration: text })}
      />
      <TextInput
        placeholder={`Organization (${item.organization})`}
        placeholderTextColor="#000"
        style={styles.input}
        value={item.organization}
        onChangeText={(text) => updateExperience(index, { ...item, organization: text })}
      />
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => saveExperience(index)}>
          <Text style={styles.okButton}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteExperience(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  const handleSaveWorkExperience = () => {
  
  }

  const addExperience = () => {
    const newExperience = [...experience, { name: '', duration: '', organization: '' }];
    setExperience(newExperience);
  };

  const updateExperience = (index, data) => {
    const newExperience = [...experience];
    newExperience[index] = data;
    setExperience(newExperience);
  };

  const saveExperience = async (index) => {
    const exp = experience[index];
    if (exp.name && exp.duration && exp.organization) {
      // Save experience to Firestore
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
        await userProfileRef.set({
          experience: experience,
        }, { merge: true });
        Alert.alert('Success', 'Experience saved successfully');
      }
    } else {
      Alert.alert('Error', 'Please fill all fields before saving.');
    }
  };

  const deleteExperience = (index) => {
    const newExperience = [...experience];
    const deleteExperience = newExperience.splice(index, 1)[0];
    setExperience(newExperience);

    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
      userProfileRef.update({
        experience: firebase.firestore.FieldValue.arrayRemove(deleteExperience)
      }).then(() => {
        Alert.alert('Success', 'Experience delete successfully');
      }).catch(error => {
        console.error('Error deleting Experience from Firestore:', error)
        Alert.alert('Error', 'Failed to delete Experience. Please try again later.');
        setExperience([...newExperience, deleteExperience])
      })

  };
};

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Work Experience</Text>
      <FlatList
        data={experience}
        renderItem={renderExperienceItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={addExperience}>
        <Text style={{color:'#fff'}}>Add Experience</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={handleSaveWorkExperience}>
        <Text style={{color:'#fff'}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};


export default EditWorkExp;
