import {StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const MidSections = () => {
  return (
    <View style={{marginTop: 25}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 70,
        }}>
        <Text style={{color: 'black' , fontWeight : "700" , fontSize : 18 , fontStyle  : 'normal'  , lineHeight : 30}}>Latest News</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap:10,
            
          }}>
          <Text style={{color: '#0080FF', fontSize: 12, fontWeight: 500 , lineHeight : 30  }}>
            See All
          </Text>
          <Icon name="arrowright" size={24} color="#0080FF" lineHeight  = {30}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MidSections;

const styles = StyleSheet.create({});
