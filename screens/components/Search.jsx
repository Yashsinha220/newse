import {StyleSheet, Text, View , TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#F0F1FA',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
      }}>
      {/* here the text input ant the icon come */}
      <TextInput
        placeholder="Search"
        placeholderTextColor={'#6b7280'}
        autoFocus={true}
        style={{
          color: 'black',
          fontSize: 15,
          fontWeight: '500',
          flex: 1,
        }}></TextInput>

      <View style={{marginRight: 12}}>
        <Icon name="search" size={25} color={'#6b7280'} opacity={0.5}></Icon>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
