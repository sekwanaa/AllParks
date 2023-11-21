import { Text, View, Image, ScrollView, Pressable } from 'react-native';
import { AppStyles } from '../assets/css/App_style'
// import { TextStyles } from '../assets/css/Text_style'


export default function LandingPage() {
    function pressHandler() {
        console.log('hello, world')
    }
    return (
        <ScrollView contentContainerStyle={AppStyles.LandingPageContainer}>
            <View style={AppStyles.LandingPageContainer}>
                <View style={{top: -100}}>
                    <Image source={require("../assets/images/Logo.png")}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text>Decouvrez les Parcs Nationaux</Text>
                    <Pressable onPress={pressHandler}>
                        <Text>Explorez</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}