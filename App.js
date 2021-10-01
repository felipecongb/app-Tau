import React from 'react';
import { StyleSheet, Image , View, ImageBackground } from 'react-native';

export default function App() {
  return (
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1633092468175-2f68b173e4e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3164&q=80' }} style={styles.image}>


      
      <View style={styles.View}>
        <View style={{alignItems:'center', marginTop:-50}}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1633092468175-2f68b173e4e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3164&q=80' }} style={styles.avatar}></Image>
        </View>
      </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f8f8f8',
  },
  image: {
    flex:1,
    resizeMode: 'cover',
    position:'relative', 
    justifyContent:'flex-end'
  },
  avatar:{
    height:100,
    width:100, 
    borderRadius:50, 
    borderColor:'#ffff', 
    borderWidth:7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,

  },
  View:{
    flex:1, 
    marginTop:250,
    borderRadius:30,
    backgroundColor:'rgba(196,196,196,0.8)',
    borderColor:'#ffff', 
    borderWidth:7,

  },
});
