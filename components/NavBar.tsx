import { Text, View, Image, ScrollView, Pressable } from 'react-native';
import { NavBarStyles } from '../assets/css/NavBar_style'
import { AppStyles } from '../assets/css/App_style';

const icons = [
    {
        name: 'iconHome',
        location: require('../assets/icons/Home.png')
    },
    {
        name: 'iconMap',
        location: require('../assets/icons/Map.png')
    },
    {
        name: 'iconGallery',
        location: require('../assets/icons/Gallery.png')
    },
    {
        name: 'iconSaved',
        location: require('../assets/icons/Saved.png')
    },
    {
        name: 'iconSearch',
        location: require('../assets/icons/Search.png')
    }
]

const iconHeight = 25
const iconWidth = 25


export default function NavBar() {
    function pressHandler() {
        console.log('pressed')
    }

    const pressableIcons = icons.map(icon => {
        return (
            <Pressable onPress={pressHandler} style={{padding: 10}}>
                <Image key={icon.name} source={icon.location} style={{height: iconHeight, width: iconWidth}}/>
            </Pressable>
        )
    })

    return (
        <View style={[NavBarStyles.navBarContainer]}>
            <View style={NavBarStyles.navBar}>
                {pressableIcons}
            </View>
        </View>
    );
}