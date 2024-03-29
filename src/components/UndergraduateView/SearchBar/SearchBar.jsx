import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import searchIcon from '../../../assets/icons/search.png';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What are you looking for...."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Image source={searchIcon} style={styles.logoSize}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginTop:20
  },
  input: {
    flex: 1,
    height: 45,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 10,
    backgroundColor:'#fff'
  },
  button: {
    backgroundColor: '#019F99',
    padding: 10,
    borderRadius: 5,
  },
  logoSize:{
    height:25,
    width:25,
    
  }
});

export default SearchBar;
