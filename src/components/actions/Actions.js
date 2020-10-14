import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textBold, styles.textCenter]}>Actions</Text>
      <View style={[styles.row, styles.buttonContainer]}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/income.png')}
          />
          <Text style={[styles.textBold, styles.textWhite]}>Add Income</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/expense.png')}
          />
          <Text style={[styles.textBold, styles.textWhite]}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#E9B44C',
    padding: 15,
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textWhite: {
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    backgroundColor: '#364156',
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonIcon: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
    marginBottom: 10,
  },
};
