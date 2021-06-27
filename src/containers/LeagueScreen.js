import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import LeagueInfo from '../components/League/LeagueInfo';

import * as mainStyles from '../assets/style';
import LeagueHeaders from '../components/League/LeagueHeaders';

const LeagueScreen = (props) => {

  return (
    <View style={styles.container}>
      <LeagueHeaders />
      <LeagueInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainStyles.MAIN_LIGHT,
    width: '100%',
    height: '100%',
    flexDirection: "column",
  },
  title: {
    alignItems: 'center'
  },
  leagueName: {
    marginVertical: 20,
    alignItems: 'center',
    fontSize: 30,
    color: mainStyles.MAIN_DARK
  }
});

export default LeagueScreen;