import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tweets from '../data/tweets'
import { TweetType } from '../types'
import LeftContainer from './LeftContainer'
import MainContainer from './MainContainer'

export type TweetProps = {
    tweet: TweetType,
}

const Tweet = ({tweet}:TweetProps ) => {
    return (
      <View style={styles.container}>
        <LeftContainer user={tweet.user} />
        <MainContainer tweet={tweet} />
      </View>
    );
}

export default Tweet

const styles = StyleSheet.create({
        container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:8,
        borderBottomWidth: 0.2,
        borderBottomColor: 'lightgrey',
    },
})
