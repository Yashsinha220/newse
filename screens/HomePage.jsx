import {StatusBar, StyleSheet, View, ScrollView} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Filter from './components/Filter';
import MidSections from './components/MidSections';
import Search from './components/Search';
import NewsScroller from './components/NewsScroller';
import {Appcontext} from '../Context';
import AnimatedLoader from 'react-native-animated-loader';
// import { ServerContainer } from '@react-navigation/native';
import axios from 'axios';

const HomePage = () => {
  const [value, setvalue] = useState('Search');

  const [visible, setvisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setvisible(!visible);
    }, 2000);
  }, [loading]);

  //  const {data} = useContext(A)
  const {
    data,
    setdata,
    hotnew,
    sethotnew,
    search,
    setsearch,
    loading,
    setloading,
  } = useContext(Appcontext);

  // const BASE_URL = `https://newsapi.org/v2/top-headlines`;
  // console.log('Hello world !');

  const options = {
    method: 'GET',
    url: 'https://newsapi.org/v2/top-headlines',
    params: {
      country: 'us',
      apiKey: '0983b090f22c4358a9e70d9cb6595817',
    },
  };

  const options2 = {
    method: 'GET',
    url: 'https://newsapi.org/v2/top-headlines',
    params: {
      country: 'us',
      apiKey: '0983b090f22c4358a9e70d9cb6595817',
      category: search,
    },
  };

  useEffect(() => {
    setloading(true);

    axios
      .request(options)
      .then(response => {
        sethotnew(response.data.articles);
        // hotnew.Filt
        sethotnew(hotnew.filter(item => item.urlToImage != null)) ;
        setloading(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    setloading(true);

    axios
      .request(options2)
      .then(response => {
        sethotnew(response.data.articles);
        sethotnew(hotnew.filter(item => item.urlToImage != null)) ;
        setloading(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, [search]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 15}}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

        {/* search bar */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 16,
            gap: 16,
          }}>
          <Search value={value} />
          <Filter />
        </View>
        {/* other contents */}
        {/* {loading ? (<View></View>) : (<View></View>)} */}

        {loading ? (
          <View
            style={{
              height: 270,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <AnimatedLoader
              visible={true}
              source={require('../assets/98195-loader.json')}
              speed={1}
              animationStyle={{
                // marginTop : 0,
                width: 200,
                height: 200,
              }}></AnimatedLoader>
          </View>
        ) : (
          <>
            <MidSections setval={setvalue}></MidSections>
            <NewsScroller></NewsScroller>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
