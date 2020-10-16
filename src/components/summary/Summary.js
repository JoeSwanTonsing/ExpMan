import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Summary() {
  return (
    <>
      <View style={[styles.container, styles.row]}>
        <View style={styles.row}>
          <Text style={styles.textWhite}>Summary For {'\u00A0'}</Text>
          <Text style={[styles.textBold, styles.textWhite]}>October 2020</Text>
        </View>
        <TouchableOpacity style={styles.reportBTN}>
          <Text style={[styles.textBold, styles.textWhite]}>View Report</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, styles.textCenter]}>
        <Text style={[styles.textBold, styles.textWhite, styles.mB10]}>
          Net Balance
        </Text>
        <Text style={[styles.textBold, styles.textWhite, styles.f25]}>
          $ 20,000
        </Text>
      </View>
      <View style={[styles.container, styles.row, styles.bgPink]}>
        {/* Total Income */}
        <View>
          <Text style={styles.textWhite}>Total Income</Text>
          <Text style={[styles.textWhite, styles.textBold, styles.f18]}>
            {'\u20B9'}
            {'\u00A0'}
            20,000
          </Text>
        </View>
        {/* Total Expense */}
        <View>
          <Text style={styles.textWhite}>Total Expense</Text>
          <Text style={[styles.textWhite, styles.textBold, styles.f18]}>
            {'\u20B9'}
            {'\u00A0'}
            20,000
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  reportBTN: {
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 20,
    borderColor: '#EF476F',
    borderWidth: 5,
    backgroundColor: '#EF476F',
  },
  textWhite: {
    color: '#fff',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flx1: {
    flex: 1,
  },
  f25: {
    fontSize: 25,
  },
  f18: {
    fontSize: 18,
  },
  mT10: {
    marginTop: 10,
  },
  mB10: {
    marginBottom: 10,
  },
  bgPink: {
    backgroundColor: '#EF476F',
  },
};
