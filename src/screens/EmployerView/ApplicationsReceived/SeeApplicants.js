import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Dp from '../../../assets/icons/defaultDP.png'

const ProfileListItem = ({ profile, onViewProfile }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.profileContainer}>
        <Image source={profile.image} style={styles.profileImage} />
        <Text style={styles.profileName}>{profile.name}</Text>
      </View>
      <TouchableOpacity style={styles.viewProfileButton} onPress={onViewProfile}>
        <Text style={styles.viewProfileText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const SeeApplicants = () => {
  // Sample list of profiles
  const profiles = [
    { id: 1, name: 'John Doe', image: Dp },
    { id: 2, name: 'Jane Smith', image: Dp },
    // Add more profiles as needed
  ];

  return (
    <View style={styles.container}>
      {profiles.map(profile => (
        <ProfileListItem
          key={profile.id}
          profile={profile}
          onViewProfile={() => {
            // Handle view profile action
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
  },
  viewProfileButton: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  viewProfileText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SeeApplicants;
