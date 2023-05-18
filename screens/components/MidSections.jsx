import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import Img_headline from './Img_headline';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {Appcontext} from '../../Context';

const MidSections = ({setval}) => {
  const choice = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  const {setsearch, markindex, setmarkindex, hotnew} = useContext(Appcontext);

  const [categoryindex, setcategoryindex] = useState(-1);
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 70,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: 18,
            fontStyle: 'normal',
            lineHeight: 30,
          }}>
          Latest News
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('seeall');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}>
          <Text
            style={{
              color: '#0080FF',
              fontSize: 12,
              fontWeight: 500,
              lineHeight: 30,
            }}>
            See All
          </Text>
          <Icon
            name="arrowright"
            size={24}
            color="#0080FF"
            lineHeight={30}></Icon>
        </TouchableOpacity>
      </View>

      {/* flat list section */}

      {/* image background */}
      <View>
        <FlatList
          data={hotnew}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Img_headline item={item}></Img_headline>}
          contentContainerStyle={{
            gap: 10,
          }}></FlatList>

        {/* choices */}
        <View
          style={{
            marginTop: 20,
            height: 32,
          }}>
          <FlatList
            data={choice}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
            contentContainerStyle={{
              gap: 8,
            }}
            renderItem={({item, index}) => {
              const iselected = markindex === index;
              return (
                <TouchableOpacity
                  onPress={() => {
                    setmarkindex(index);
                    setval(item);
                    setsearch(item);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: 32,
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    borderRadius: 16,
                    borderColor: iselected ? '#FFB3B6' : '#F0F1FA',
                    backgroundColor: iselected ? '#FF3A44' : '#FFFFFF',
                  }}>
                  <Text
                    style={{
                      color: iselected ? '#FFFFFF' : '#2E0505',
                      fontWeight: '600',
                      fontSize: 12,
                      lineHeight: 16,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}></FlatList>
        </View>
      </View>
    </View>
  );
};

export default MidSections;

const styles = StyleSheet.create({});
