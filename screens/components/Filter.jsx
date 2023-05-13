import {StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useRef} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';

const Filter = () => {
    const ref = useRef();

  const sort = ['Recommended', 'Latest', 'Most Viewed', 'Channel', 'Following'];
  const [filter, setfilter] = useState('');
  const [categoryindex, setcategoryindex] = useState(-1);
  const [reset , setreset] = useState(false)
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#FF3A44',
          height: 40,
          width: 40,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          ref.current.open();
        }}>
        <Icon name="filter" size={24} color={'white'}></Icon>
      </TouchableOpacity>

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
                setcategoryindex(-1);
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
              <Icons name="delete-empty" size={24} color={'black'} ></Icons>
              <Text style={{color: 'black'}}>Reset</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 24}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
              Sort By
            </Text>

            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8}}>
              {sort.map((item, index) => {
                const iselected = categoryindex === index;
                return (
                  // {}
                  <TouchableOpacity
                    onPress={() => {
                      setfilter(item);
                      setcategoryindex(index);
                      console.log(filter);
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


      </View>
    
  );
};

export default Filter;

const styles = StyleSheet.create({});
