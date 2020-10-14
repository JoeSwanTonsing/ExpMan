import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {displayName as appName} from '../../app.json';

export default function DrawerContent(props) {
  const openProject = () => {
    Linking.openURL('https://joeswantonsing.github.io/ExpMan/').catch((err) =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={[styles.headerContainer, styles.separator]}>
          <Image
            style={styles.headerImage}
            source={require('../assets/IconRound.png')}
          />
          <View style={styles.headerTitles}>
            <Text style={styles.headerTitleText}>{appName}</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="apps-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="bar-chart-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Monthly Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="star-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Rate App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon
              name="share-social-outline"
              size={25}
              style={styles.itemIcon}
            />
            <Text style={styles.itemTitle}>Share App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="cog-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="shield-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon
              name="chatbubble-ellipses-outline"
              size={25}
              style={styles.itemIcon}
            />
            <Text style={styles.itemTitle}>Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={openProject}>
            <Icon name="globe-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>See Project</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    backgroundColor: '#364156', //app theme
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  headerImage: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    marginRight: 5,
  },
  headerTitles: {
    flex: 1,
    marginLeft: 5,
  },
  headerTitleText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    fontSize: 20,
    lineHeight: 30,
  },
  menuContainer: {
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemIcon: {
    color: '#fff',
    marginRight: 7,
  },
  itemTitle: {
    color: '#fff',
    marginLeft: 7,
  },
  separator: {
    borderBottomColor: '#272f3f',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
};
