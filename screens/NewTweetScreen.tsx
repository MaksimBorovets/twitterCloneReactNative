import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, TextInput } from 'react-native'
import ProfilePicture from '../components/ProfilePicture';
import Colors from '../constants/Colors';
import tweets from '../data/tweets';

const NewTweetScreen = () => {
    const [tweet, setTweet] = React.useState('')
    const [imageUrl, setImageUrl] = React.useState('')

    const navigation = useNavigation()

    const close = () => {
        navigation.navigate('Home')
    }

    const onPostTweet = () => {
        console.log(tweet)
        console.log(imageUrl)
        setTweet("");
        setImageUrl('')
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={close}>
            <AntDesign name={"close"} size={30} color={Colors.light.tint} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPostTweet}>
            <Text style={styles.buttonText}> Tweet </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newTweetContainer}>
          <ProfilePicture image={tweets[0].user.image} />
          <View style={styles.inputsContainer}>
            <TextInput
              value={tweet}
              onChangeText={setTweet}
              multiline={true}
              numberOfLines={3}
              placeholder={"What's happening? "}
              style={styles.tweetInput}
            />
            <TextInput
              value={imageUrl}
              onChangeText={setImageUrl}
              placeholder={"Image URL (optional)"}
              style={styles.imageInput}
            />
          </View>
        </View>
      </SafeAreaView>
    );
}

export default NewTweetScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding:15,
  },

  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  newTweetContainer: {
      flexDirection:"row",
      padding:15,
  },
  inputsContainer: {
      marginLeft:10,
  },
  tweetInput: {
      height:100,
      maxHeight:300,
      fontSize:20,
  },
  imageInput: {},
});
