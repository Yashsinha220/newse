import {StatusBar, StyleSheet, View, ScrollView} from 'react-native';
import React , {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Filter from './components/Filter';
import MidSections from './components/MidSections';
import Search from './components/Search';
import NewsScroller from './components/NewsScroller';

const HomePage = () => {
 const [value, setvalue] = useState("Search")
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 15}}>
      <View style={{flex  : 1}}>
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
        <MidSections setval = {setvalue}></MidSections>
      <NewsScroller></NewsScroller>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
