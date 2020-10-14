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

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.sav}>
      <ScrollView>
        <Summary />
        <Actions />
        <View style={styles.container}>
          <TouchableOpacity style={styles.transactionsButton}>
            <Image
              style={styles.btnImage}
              source={require('../assets/transactions.png')}
            />
            <Text style={styles.btnText}>Transactions</Text>
          </TouchableOpacity>
        </View>
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
