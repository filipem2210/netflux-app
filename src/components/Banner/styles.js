import { Dimensions, StyleSheet } from 'react-native';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: screenHeight / 2,
    width: screenWidth
  },
  nav: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logo: {
    height: 50,
    width: 40,
  },
  navOption: {
    color: '#fff'
  },
  banner: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
  },
  bannerImg: {
    width: screenWidth,
    height: '100%',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35
  },
  options: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  myList: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  myListText: {
    color: '#fff',
    fontSize: 12
  },
  play: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 5,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  playText: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 12
  }
});
