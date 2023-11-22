import { StyleSheet } from 'react-native'

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LandingPageContainer: {
    flex: 1,
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    display: 'none'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 2},
    shadowOpacity: .3,
    shadowRadius: 2,
    elevation: 1,
  }
});

