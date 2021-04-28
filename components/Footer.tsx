import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TweetType } from '../types'
import {AntDesign, EvilIcons, Feather} from '@expo/vector-icons'

export type FooterContainerProps = {
    tweet: TweetType,
}

const Footer = ({tweet}:FooterContainerProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Feather name={"message-circle"} size={20} color={"grey"} />
          <Text style={styles.numberOfComments}> {tweet.numberOfComments}</Text>
        </View>
        <View style={styles.iconContainer}>
          <EvilIcons name={"retweet"} size={30} color={"grey"} />
          <Text style={styles.numberOfComments}> {tweet.numberOfRetweets}</Text>
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name={"hearto"} size={20} color={"grey"} />
          <Text style={styles.numberOfComments}> {tweet.numberOfLikes}</Text>
        </View>
        <View style={styles.iconContainer}>
          <EvilIcons name={"share-google"} size={28} color={"grey"} />
        </View>
      </View>
    );
}

export default Footer

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 5,
    },
    numberOfComments:{},
    iconContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
})
