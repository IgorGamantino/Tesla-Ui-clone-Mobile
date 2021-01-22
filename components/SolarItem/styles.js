import { StyleSheet, Dimensions,Platform } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    
    textAlign: 'center',
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',

    
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  subtitle: {
    paddingRight:60,
    paddingLeft:70,
    textAlign: 'center',
    fontSize: 16,
    color: '#5c5e62',
    
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;
