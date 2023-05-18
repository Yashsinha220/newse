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
import { useNavigation } from '@react-navigation/native';

const MidSections = ({setval}) => {
  const data = [
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/Adityanath_1683482398452_1683944810309.jpg',
      author: 'Karishma Pranav Bhavsar',
      headline:
        'UP municipal election results 2023: Civic body poll, bye-election results today; BJP leads the race',
      text: 'Uttar Pradesh Chief Minister Yogi Adityanath addresses during a public meeting for the UP Municipal elections, in Aligarh, Sunday, May 7, 2023. (PTI Photo)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/07/600x338/examination_1683469790387_1683469790555.jpg',
      author: 'Livemint',
      headline:
        ' Karnataka SSLC Result 2023 releasing on 8 May. Direct link, time, process here',
      text: 'Candidates who wrote the examination in 2023 can check the official website at sslc.karnataka.gov.in.',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/VVPATs-Karnataka_1683936949968_1683936951193.jpg',
      author: 'livmint',
      headline:
        "Karnataka election result 2023: Here's how to check election results in your constituencies",
      text: 'Karnataka recorded a 73.19% of voter turnout--the highest-ever voter turnout in the southern state ever (HT_PRINT)',
    },

    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/Adityanath_1683482398452_1683944810309.jpg',
      author: 'Karishma Pranav Bhavsar',
      headline:
        'UP municipal election results 2023: Civic body poll, bye-election results today; BJP leads the race',
      text: 'Uttar Pradesh Chief Minister Yogi Adityanath addresses during a public meeting for the UP Municipal elections, in Aligarh, Sunday, May 7, 2023. (PTI Photo)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/07/600x338/examination_1683469790387_1683469790555.jpg',
      author: 'Livemint',
      headline:
        ' Karnataka SSLC Result 2023 releasing on 8 May. Direct link, time, process here',
      text: 'Candidates who wrote the examination in 2023 can check the official website at sslc.karnataka.gov.in.',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/VVPATs-Karnataka_1683936949968_1683936951193.jpg',
      author: 'livmint',
      headline:
        "Karnataka election result 2023: Here's how to check election results in your constituencies",
      text: 'Karnataka recorded a 73.19% of voter turnout--the highest-ever voter turnout in the southern state ever (HT_PRINT)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/VVPATs-Karnataka_1683936949968_1683936951193.jpg',
      author: 'livmint',
      headline:
        "Karnataka election result 2023: Here's how to check election results in your constituencies",
      text: 'Karnataka recorded a 73.19% of voter turnout--the highest-ever voter turnout in the southern state ever (HT_PRINT)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/VVPATs-Karnataka_1683936949968_1683936951193.jpg',
      author: 'livmint',
      headline:
        "Karnataka election result 2023: Here's how to check election results in your constituencies",
      text: 'Karnataka recorded a 73.19% of voter turnout--the highest-ever voter turnout in the southern state ever (HT_PRINT)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/VVPATs-Karnataka_1683936949968_1683936951193.jpg',
      author: 'livmint',
      headline:
        "Karnataka election result 2023: Here's how to check election results in your constituencies",
      text: 'Karnataka recorded a 73.19% of voter turnout--the highest-ever voter turnout in the southern state ever (HT_PRINT)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/VVPATs-Karnataka_1683936949968_1683936951193.jpg',
      author: 'livmint',
      headline:
        "Karnataka election result 2023: Here's how to check election results in your constituencies",
      text: 'Karnataka recorded a 73.19% of voter turnout--the highest-ever voter turnout in the southern state ever (HT_PRINT)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/Adityanath_1683482398452_1683944810309.jpg',
      author: 'Karishma Pranav Bhavsar',
      headline:
        'UP municipal election results 2023: Civic body poll, bye-election results today; BJP leads the race',
      text: 'Uttar Pradesh Chief Minister Yogi Adityanath addresses during a public meeting for the UP Municipal elections, in Aligarh, Sunday, May 7, 2023. (PTI Photo)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/07/600x338/examination_1683469790387_1683469790555.jpg',
      author: 'Livemint',
      headline:
        ' Karnataka SSLC Result 2023 releasing on 8 May. Direct link, time, process here',
      text: 'Candidates who wrote the examination in 2023 can check the official website at sslc.karnataka.gov.in.',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/VVPATs-Karnataka_1683936949968_1683936951193.jpg',
      author: 'livmint',
      headline:
        "Karnataka election result 2023: Here's how to check election results in your constituencies",
      text: 'Karnataka recorded a 73.19% of voter turnout--the highest-ever voter turnout in the southern state ever (HT_PRINT)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/Adityanath_1683482398452_1683944810309.jpg',
      author: 'Karishma Pranav Bhavsar',
      headline:
        'UP municipal election results 2023: Civic body poll, bye-election results today; BJP leads the race',
      text: 'Uttar Pradesh Chief Minister Yogi Adityanath addresses during a public meeting for the UP Municipal elections, in Aligarh, Sunday, May 7, 2023. (PTI Photo)',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/07/600x338/examination_1683469790387_1683469790555.jpg',
      author: 'Livemint',
      headline:
        ' Karnataka SSLC Result 2023 releasing on 8 May. Direct link, time, process here',
      text: 'Candidates who wrote the examination in 2023 can check the official website at sslc.karnataka.gov.in.',
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/13/600x338/VVPATs-Karnataka_1683936949968_1683936951193.jpg',
      author: 'livmint',
      headline:
        "Karnataka election result 2023: Here's how to check election results in your constituencies",
      text: 'Karnataka recorded a 73.19% of voter turnout--the highest-ever voter turnout in the southern state ever (HT_PRINT)',
    },
    
  ];

  const choice = [
    'Healthy',
    'Technology',
    'Finance',
    'Arts',
    'Science',
    'Politics',
  ];

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
        onPress={()=>{
          navigation.navigate('seeall')

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
          data={data}
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
              const iselected = categoryindex === index;
              return (
                <TouchableOpacity
                  onPress={() =>{
                    setcategoryindex(index)
                    setval(item)
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
