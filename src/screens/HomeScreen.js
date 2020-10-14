import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  sav: {
    flex: 1,
    backgroundColor: '#364156',
  },
};
