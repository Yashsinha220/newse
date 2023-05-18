import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from './components/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getPathFromState} from '@react-navigation/native';
import {FlatList} from 'react-native';
import NewsScroller from './components/NewsScroller';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const SeeALL = () => {
  const [categoryindex, setcategoryindex] = useState(-1);
  const [value, setvalue] = useState('Search');
  const ref = useRef();
  // const [filter , setfilter] = useState(-1);
  const [filters, setfilters] = useState(-1);

  const sort = ['Recommended', 'Latest', 'Most Viewed', 'Channel', 'Following'];
  const [filter, setfilter] = useState('');

  const [reset, setreset] = useState(false);

  const choice = [
    'Healthy',
    'Technology',
    'Finance',
    'Arts',
    'Science',
    'Politics',
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 15}}>
      <View style={{marginTop: 16, flex: 1}}>
        {/* is container kae andear aayega sab kuch */}

        {/* search bar */}
        <View
          style={{
            height: 45,
          }}>
          <Search value={value}></Search>
        </View>

        {/* choice container */}
        <View style={{marginTop: 15}}>
          {/* one for the filter continaer and the other is the flat list */}
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
              // justifyContent : "center"
            }}>
            <TouchableOpacity
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 40,
                borderWidth: 1,
                paddingHorizontal: 8,
                borderRadius: 16,
                borderColor: '#FFB3B6',
                backgroundColor: '#FF3A44',
                width: 100,
                flexDirection: 'row',
                gap: 8,
              }}
              onPress={() => {
                ref.current.open();
              }}>
              <Icon name="filter" size={20} color={'white'}></Icon>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: 15,
                  lineHeight: 16,
                }}>
                Filter
              </Text>
            </TouchableOpacity>

            {/* rba sheet */}

            {/* here the rba sheet will come */}
            <RBSheet
              ref={ref}
              height={360}
              closeOnDragDown={true}
              closeOnPressMask={true}
              closeOnPressBack={true}
              openDuration={400}
              closeDuration={400}
              customStyles={{
                container: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
              }}>
              <View style={{padding: 16, marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#041E2F',
                      fontWeight: '700',
                      fontSize: 22,
                      lineHeight: 30,
                      height: 30,
                    }}>
                    Filter
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setfilter('');
                      setfilters(-1);
                    }}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      gap: 8,
                      paddingHorizontal: 16,
                      borderWidth: 1,
                      borderColor: '#041E2F',
                      borderRadius: 999,
                      paddingVertical: 8,
                      boxSizing: 'border-box',
                    }}>
                    <Icons
                      name="delete-empty"
                      size={24}
                      color={'black'}></Icons>
                    <Text style={{color: 'black'}}>Reset</Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 24}}>
                  <Text
                    style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
                    Sort By
                  </Text>

                  <View
                    style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8}}>
                    {sort.map((item, index) => {
                      const iselected = filters === index;
                      return (
                        // {}
                        <TouchableOpacity
                          onPress={() => {
                            setfilter(item);
                            // setcategoryindex(index);
                            setfilters(index);
                            // console.log(filter);
                          }}
                          key={index}
                          style={{
                            marginTop: 8,
                            paddingHorizontal: 8,
                            paddingVertical: 16,
                            borderWidth: 1,
                            borderColor: '#F0F1FA',
                            borderRadius: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: iselected ? '#FF3A44' : '#fff',
                          }}>
                          <Text
                            style={{
                              color: iselected ? 'white' : 'black',
                            }}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>

                {/* button */}
                <TouchableOpacity
                  onPress={() => ref.current.close()}
                  style={{
                    marginTop: 25,
                    backgroundColor: '#FF3A44',
                    height: 48,
                    borderRadius: 999,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      lineHeight: 22,
                      fontWeight: '800',
                      fontSize: 16,
                      letterSpacing: 2,
                    }}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </RBSheet>

            <FlatList
              horizontal
              data={choice}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 8,
                paddingHorizontal: 8,
              }}
              renderItem={({item, index}) => {
                const isselected = categoryindex === index;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setcategoryindex(index);
                      setvalue(item);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      height: 40,
                      borderWidth: 1,
                      paddingHorizontal: 8,
                      borderRadius: 16,
                      borderColor: isselected ? '#FFB3B6' : '#F0F1FA',
                      backgroundColor: isselected ? '#FF3A44' : '#FFFFFF',
                      // width: 100,
                      flexDirection: 'row',
                      gap: 8,
                    }}>
                    <Text
                      style={{
                        color: isselected ? '#FFFFFF' : '#2E0505',
                        fontWeight: '600',
                        fontSize: 15,
                        lineHeight: 16,
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}></FlatList>
            {/* </View> */}
          </View>
        </View>

        <NewsScroller></NewsScroller>
      </View>
    </SafeAreaView>
  );
};

export default SeeALL;

const styles = StyleSheet.create({});
