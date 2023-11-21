import { Text, View, Image, ScrollView, Button } from 'react-native';
import { AppStyles } from '../assets/css/App_style'
// import { TextStyles } from '../assets/css/Text_style'


export default function LandingPage() {
    return (
        <ScrollView contentContainerStyle={AppStyles.LandingPageContainer} style={AppStyles.LandingPage}>
            <View>
                <Image source={require("../assets/images/Logo.png")} style={{top: -100}}/>
            </View>
            <View>
                {/* <Text style={TextStyles.RecoletaMedium}>Decouvrez les Parcs Nationaux</Text> */}
                <Button title='Explorez' color={'#EEB39D'}></Button>
            </View>
        </ScrollView>
    );
}