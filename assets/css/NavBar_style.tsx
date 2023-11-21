import { StyleSheet } from 'react-native'

export const NavBarStyles = StyleSheet.create({
    navBarContainer: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 40,
        borderRadius: 40,
        backgroundColor: "#fff",
    },
    navBar: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});

