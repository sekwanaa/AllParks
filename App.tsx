import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from 'react-native';
import { AppStyles } from './assets/css/App_style'
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

export default function App(){
    return (
      <View style={AppStyles.container}>
          <ImageBackground source={require("./assets/images/Background.png")} resizeMode={'cover'} style={{height: '100%', width: '100%'}}>
            <LandingPage/>
          </ImageBackground>
          {/* <NavBar/> */}
        <StatusBar style="auto" />
      </View>
    );
  }
