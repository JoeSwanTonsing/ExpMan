import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';

export default function AddIncomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.titleStyle}>Date</Text>
          <Text style={styles.inputStyle}>Date</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.titleStyle}>Date</Text>
          <Text style={styles.inputStyle}>Date</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#364156',
  },
  content: {
    margin: 15,
    padding: 15,
    borderRadius: 3,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    marginBottom: 20,
  },
  titleStyle: {
    marginBottom: 5,
  },
  inputStyle: {
    marginVertical: 7,
  },
};
