import {StyleSheet, Text, View, ImageBackground , Image} from 'react-native';
import React from 'react';

const News = ({item}) => {
  return (
    <View
      style={{
        borderRadius: 8,
        position: 'relative',
        overflow: 'hidden',
        flex: 1,
        paddingHorizontal: 2,
        paddingVertical: 8,
        height: 128,
      }}>
      <Image
        resizeMode="cover"
        source={{
          uri: item.img,
        }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          flex: 1,
          opacity : 0.8,
          zIndex : -1
        }}></Image>

      <View
        style={{
         
          flex: 1,
          padding: 8,
          gap: 55,
          zIndex : 10
        }}>
       <View style ={{ flexWrap : "wrap"}}>
       <Text
          style={{
            fontSize: 14,
            fontWeight: '900',
            color: '#ffffff',
            fontStyle: 'normal',
            lineHeight: 21,
          }}>
         {item.header}
        </Text>
       </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 21,
              fontStyle: 'normal',
              alignItems: 'center',
              color: '#FFFFFF',
            }}>
            {item.author}
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 21,
              fontStyle: 'normal',
              alignItems: 'center',
              color: '#FFFFFF',
            }}>
            {item.date}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
