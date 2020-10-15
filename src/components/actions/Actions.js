import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default function Actions({navigation}) {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.buttonContainer, styles.mb10]}>
        <TouchableOpacity
          style={[styles.buttonStyle, styles.mr15]}
          onPress={() => navigation.push('AddIncomeScreen')}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/income.png')}
          />
          <Text style={[styles.textBold, styles.textWhite]}>Add Income</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, styles.ml15]}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/expense.png')}
          />
          <Text style={[styles.textBold, styles.textWhite]}>Add Expense</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.buttonContainer, styles.mt10]}>
        <TouchableOpacity
          style={[styles.buttonStyle, styles.mr15]}
          onPress={() => navigation.push('AddIncomeScreen')}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/transactions.png')}
          />
          <Text style={[styles.textBold, styles.textWhite]}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, styles.ml15]}>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/categories.png')}
          />
          <Text style={[styles.textBold, styles.textWhite]}>Categories</Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    flex: 1,
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
  mb10: {
    marginBottom: 10,
  },
  mt10: {
    marginTop: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  mr15: {
    marginRight: 15,
  },
};
