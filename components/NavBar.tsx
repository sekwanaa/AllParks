import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { NavBarStyles } from '../assets/css/NavBar_style'
import { AppStyles } from '../assets/css/App_style';

const icons = [
    {
        name: 'Home',
        location: require('../assets/icons/Home.png')
    },
    {
        name: 'Map',
        location: require('../assets/icons/Map.png')
    },
    {
        name: 'Gallery',
        location: require('../assets/icons/Gallery.png')
    },
    {
        name: 'Saved',
        location: require('../assets/icons/Saved.png')
    },
    {
        name: 'Search',
        location: require('../assets/icons/Search.png')
    }
]

const iconHeight = 25
const iconWidth = 25


export default class NavBar extends React.Component{
    state = {
        screenText: 'Press a button'
    }
    
    changeText = (text: string) => {
        console.log(text + ' has been pressed')
        this.setState({
            screenText: text
        })
    }

    pressableIcons = icons.map(icon => {
        return (
            <Pressable key={icon.name} onPress={() => this.changeText(icon.name)} style={{padding: 10}}>
                <Image source={icon.location} style={{height: iconHeight, width: iconWidth}}/>
            </Pressable>
        )
    })

    render(): React.ReactNode {
        return (
            <>
                <Text>{this.state.screenText}</Text>
                <View style={[NavBarStyles.navBarContainer, AppStyles.shadow]}>
                    <View style={NavBarStyles.navBar}>
                        {this.pressableIcons}
                    </View>
                </View>
            </>
        );
    }
}