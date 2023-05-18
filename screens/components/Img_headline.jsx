import {StyleSheet, Text, View , TouchableOpacity , ImageBackground , SectionList} from 'react-native';
import React from 'react';

const Img_headline = ({item}) => {
  return (
    <View
      style={{
        marginTop: 16,
      }}>
      <TouchableOpacity
        style={{
          position: 'relative',
          height: 240,
          overflow: 'hidden',
          borderRadius: 8,
          width: 300,
        }}>
        <ImageBackground
          source={{
            uri: item.urlToImage,
          }}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}></ImageBackground>

        <View
          style={{
            position: 'absolute',
            marginTop: 80,
            paddingHorizontal: 10,
          }}>
          <View style={{gap: 31}}>
            <View>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 10,
                  fontWeight: '800',
                  lineHeight: 14,
                }}>
                {item.author}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#ffffff',
                  fontStyle: 'normal',
                  lineHeight: 21,
                }}>
                {item.title.slice(0 , 100)} show more ...
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '400',
                  color: '#ffffff',
                  lineHeight: 14,
                }}>
                {item.description.slice(0 , 150) } show more ....
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Img_headline;

const styles = StyleSheet.create({});
