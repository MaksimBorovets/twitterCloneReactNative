import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TweetType } from '../types';
import { Ionicons } from '@expo/vector-icons'
import Footer from './Footer';
import moment from 'moment'


export type MainContainerProps ={
    tweet: TweetType,
}

const MainContainer = ({tweet}: MainContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeaderContainer}>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username}</Text>
          <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
        </View>

        <View>
          <Ionicons style={{}} name={"chevron-down"} size={16} color={"grey"} />
        </View>
      </View>

      <View>
        <Text style={styles.content}>{tweet.content}</Text>
        {!!tweet.image && <Image style={styles.image} source={{ uri: tweet.image }} />}
      </View>
      <Footer tweet={tweet}/>
    </View>
  );
};

export default MainContainer

const styles = StyleSheet.create({
    container:{
        flex:1
    },
  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
  name: {
    marginRight: 5,
    fontWeight:'bold',
  },
  username: {
    marginRight: 5,
    color:'grey',
  },
  createdAt: {
    marginRight: 5,
    color:'grey',
  },
  content:{
      marginTop:5,
      lineHeight: 18,
  },
  image:{
    marginVertical:10,
      width:"100%",
      height: 200,
      borderRadius:15,
      resizeMode:'cover',
      overflow:'hidden',

  },
});
