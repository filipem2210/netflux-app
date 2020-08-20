import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  viewSearch: {
    backgroundColor: '#111',
    borderRadius: 5,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 10,
  },
  inputSearch: {
    padding: 15,
    paddingLeft: 50,
    fontSize: 18,
    color: 'rgba(255, 255, 255, .5)',
  },
  iconSearch: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  content: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    marginVertical: 2,
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  searchTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    marginVertical: 10,
  },
  itemImg: {
    width: 170,
    height: 95
  },
  itemTitle: {
    width: '40%'
  },
  playButton: {
    padding: 10
  }
});
