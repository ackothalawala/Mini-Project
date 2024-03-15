import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { firebase } from '../../../firebase/config';

const EditAcademicQualifications = () => {
  const [qualifications, setQualifications] = useState([{ name: '', duration: '', institution: '' }]);

const handleSaveAcademicQualification = () => {
  
}

useEffect(() => {
  // Fetch data
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
    userProfileRef.get().then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        if (userData.qualifications) {
          setQualifications(userData.qualifications);
        }
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }
}, []);

  const renderQualificationItem = ({ item, index }) => (
    <View style={styles.qualificationItem}>
      <TextInput
        placeholder={`Qualification Name (${item.name})`}
        placeholderTextColor="#000"
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updateQualification(index, { ...item, name: text })}
      />
      <TextInput
        placeholder={`Duration (${item.duration})`}
        placeholderTextColor="#000"
        style={styles.input}
        value={item.duration}
        onChangeText={(text) => updateQualification(index, { ...item, duration: text })}
      />
      <TextInput
        placeholder={`Institution (${item.institution})`}
        placeholderTextColor="#000"
        style={styles.input}
        value={item.institution}
        onChangeText={(text) => updateQualification(index, { ...item, institution: text })}
      />
            <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => saveQualification(index)}>
          <Text style={styles.okButton}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteQualification(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
        <View>
        </View>
      </View>
    </View>
  );

  const addQualification = () => {
    const newQualifications = [...qualifications, { name: '', duration: '', institution: '' }];
    setQualifications(newQualifications);
  };

  const updateQualification = (index, data) => {
    const newQualifications = [...qualifications];
    newQualifications[index] = data;
    setQualifications(newQualifications);
  };

  const saveQualification = async (index) => {
    const qualification = qualifications[index];
    if (qualification.name && qualification.duration && qualification.institution) {
      // Save qualifications to Firestore
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
        await userProfileRef.set({
          qualifications: qualifications,
        }, { merge: true });
        Alert.alert('Success', 'Qualification saved successfully');
      }
    } else {
      Alert.alert('Error', 'Please fill all fields before saving.');
    }
  };

  const deleteQualification = (index) => {
    const newQualifications = [...qualifications];
    const deletedQualification = newQualifications.splice(index, 1)[0];
    setQualifications(newQualifications);

    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        const userProfileRef = firebase.firestore().collection('UsersProfile').doc(currentUser.uid);
        //remove 
        userProfileRef.update({
            qualifications: firebase.firestore.FieldValue.arrayRemove(deletedQualification)
        }).then(() => {
            Alert.alert('Success', 'Qualification deleted successfully');
        }).catch(error => {
            console.error('Error deleting qualification from Firestore:', error);
            Alert.alert('Error', 'Failed to delete qualification. Please try again later.');
            //if fail add deleted qualification to local.
            setQualifications([...newQualifications, deletedQualification]);
        });
    }

  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Academic Qualifications</Text>
      <FlatList
        data={qualifications}
        renderItem={renderQualificationItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={addQualification}>
        <Text style={{color:'#fff'}}>Add Qualification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={handleSaveAcademicQualification}>
        <Text style={{color:'#fff'}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditAcademicQualifications;
