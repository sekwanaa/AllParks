import { Text, View, Image, ScrollView, Pressable } from 'react-native';
import { AppStyles } from '../assets/css/App_style'
import { TextStyles } from '../assets/css/Text_style'
import { ButtonStyles } from '../assets/css/Button_style';
import { IconStyles } from '../assets/css/Icon_style';

const arrowIcon = require('../assets/icons/right-arrow.png')

export default function LandingPage() {
    function pressHandler() {
        console.log('hello, world')
    }
    return (
        <View style={AppStyles.LandingPageContainer}>
            <View style={AppStyles.LandingPageContainer}>
                <View style={{width: 200, height: 200, alignItems: 'center'}}>
                    <Image source={require("../assets/images/Logo.png")} style={{bottom: 30, flex: 1, height: undefined, width: undefined, aspectRatio: 1.2}}/>
                </View>
                <View style={{alignItems: 'center', width: '90%', top: 140}}>
                    <Text style={[TextStyles.Large, {color: '#FFF', maxWidth: '60%', textAlign: 'center', paddingVertical: 10}]} >Decouvrez les Parcs Nationaux</Text>
                    <Pressable onPress={pressHandler} style={[ButtonStyles.container, ButtonStyles.border, {marginVertical: 10, flexDirection: 'row'}]}>
                        <Text style={[TextStyles.Large, TextStyles.Bold, TextStyles.pink, {flex: 3, textAlign: 'right', paddingRight: 30}]} >Explorez</Text>
                        <View style={{height: 40, width: 10, flex: 1}}>
                            <Image source={arrowIcon} style={{tintColor: '#EEB39D', flex: 1, height: undefined, width: undefined, aspectRatio: 1}}/>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}