import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UserType } from '../types';
import ProfilePicture from './ProfilePicture';

export type LeftContainerProps ={
user: UserType,
}

const LeftContainer = ({user}: LeftContainerProps) => {
  return (
    <View style={styles.container}> 
      <ProfilePicture image={user.image} size={75}/>
    </View>
  ); 
};

export default LeftContainer

const styles = StyleSheet.create({
    container:{
      paddingRight:7,
}
    

})
