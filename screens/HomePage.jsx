import {StatusBar, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Filter from './components/Filter';
import MidSections from './components/MidSections';
import Search from './components/Search';

const HomePage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 15}}>
      <ScrollView>
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
          <Search />
          <Filter />
        </View>
        {/* other contents */}
        <MidSections></MidSections>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
