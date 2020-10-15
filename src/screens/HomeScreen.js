import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

//custom components
import Summary from '../components/summary/Summary';
import Actions from '../components/actions/Actions';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.sav}>
      <ScrollView>
        <Summary navigation={navigation} />
        <Actions navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  sav: {
    flex: 1,
    backgroundColor: '#364156',
  },
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionsButton: {
    paddingVertical: 7,
    paddingHorizontal: 25,
    backgroundColor: '#EF476F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  btnImage: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
    tintColor: '#fff',
  },
};
