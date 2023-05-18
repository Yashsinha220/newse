import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Scro,
} from 'react-native';
import React from 'react';
import News from './News';

const NewsScroller = () => {
  const data = [
    {
      img: 'https://images.indianexpress.com/2023/05/shivakumar-1.jpg?w=750',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : "Karnataka Govt Formation Live Updates:"
    },
    {
      img: 'https://images.indianexpress.com/2023/05/Meters-759.jpg?w=640',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Power in Punjab becomes costlier'
    },
    {
      img: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/5/2023_5$largeimg_1288044404.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Punjab increases electricity charges'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/26de40aa-fb8b-11eb-9351-32be236c0b91_1630581868515_1684125877115.jpg',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : 'Tata Motors DVR share price soars on dividend'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/shivakumar_1684137278619_1684137278828.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Siddaramaih vs Dk Shivkumar'
    },

    {
      img: 'https://images.indianexpress.com/2023/05/shivakumar-1.jpg?w=750',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : "Karnataka Govt Formation Live Updates:"
    },
    {
      img: 'https://images.indianexpress.com/2023/05/Meters-759.jpg?w=640',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Power in Punjab becomes costlier'
    },
    {
      img: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/5/2023_5$largeimg_1288044404.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Punjab increases electricity charges'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/26de40aa-fb8b-11eb-9351-32be236c0b91_1630581868515_1684125877115.jpg',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : 'Tata Motors DVR share price soars on dividend'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/shivakumar_1684137278619_1684137278828.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Siddaramaih vs Dk Shivkumar'
    },
 


    {
      img: 'https://images.indianexpress.com/2023/05/shivakumar-1.jpg?w=750',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : "Karnataka Govt Formation Live Updates:"
    },
    {
      img: 'https://images.indianexpress.com/2023/05/Meters-759.jpg?w=640',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Power in Punjab becomes costlier'
    },
    {
      img: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/5/2023_5$largeimg_1288044404.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Punjab increases electricity charges'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/26de40aa-fb8b-11eb-9351-32be236c0b91_1630581868515_1684125877115.jpg',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : 'Tata Motors DVR share price soars on dividend'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/shivakumar_1684137278619_1684137278828.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Siddaramaih vs Dk Shivkumar'
    },
 
    {
      img: 'https://images.indianexpress.com/2023/05/shivakumar-1.jpg?w=750',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : "Karnataka Govt Formation Live Updates:"
    },
    {
      img: 'https://images.indianexpress.com/2023/05/Meters-759.jpg?w=640',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Power in Punjab becomes costlier'
    },
    {
      img: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/5/2023_5$largeimg_1288044404.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Punjab increases electricity charges'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/26de40aa-fb8b-11eb-9351-32be236c0b91_1630581868515_1684125877115.jpg',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : 'Tata Motors DVR share price soars on dividend'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/shivakumar_1684137278619_1684137278828.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Siddaramaih vs Dk Shivkumar'
    },
    {
      img: 'https://images.indianexpress.com/2023/05/shivakumar-1.jpg?w=750',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : "Karnataka Govt Formation Live Updates:"
    },
    {
      img: 'https://images.indianexpress.com/2023/05/Meters-759.jpg?w=640',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Power in Punjab becomes costlier'
    },
    {
      img: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/5/2023_5$largeimg_1288044404.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Punjab increases electricity charges'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/26de40aa-fb8b-11eb-9351-32be236c0b91_1630581868515_1684125877115.jpg',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : 'Tata Motors DVR share price soars on dividend'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/shivakumar_1684137278619_1684137278828.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Siddaramaih vs Dk Shivkumar'
    },
 
    {
      img: 'https://images.indianexpress.com/2023/05/shivakumar-1.jpg?w=750',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : "Karnataka Govt Formation Live Updates:"
    },
    {
      img: 'https://images.indianexpress.com/2023/05/Meters-759.jpg?w=640',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Power in Punjab becomes costlier'
    },
    {
      img: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/5/2023_5$largeimg_1288044404.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Punjab increases electricity charges'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/26de40aa-fb8b-11eb-9351-32be236c0b91_1630581868515_1684125877115.jpg',
      author: 'Mat vallio',
      date: 'Sunday, 9 May 2021',
      header : 'Tata Motors DVR share price soars on dividend'
    },
    {
      img: 'https://www.livemint.com/lm-img/img/2023/05/15/600x338/shivakumar_1684137278619_1684137278828.jpg',
      author: 'Zalim khan',
      date: 'Sunday, 9 May 2021',
      header : 'Siddaramaih vs Dk Shivkumar'
    },
 
 
 
    
  ];
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        gap: 8,
        marginTop: 15,
      }}
      renderItem={({item, index}) => (
        <News item={item} key={index}></News>
      )}></FlatList>
  );
};

export default NewsScroller;

const styles = StyleSheet.create({});
