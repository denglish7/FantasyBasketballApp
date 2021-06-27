import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import * as mainStyles from '../../assets/style';

const LeagueInfo = (props) => {
  const teams = [
    {name: 'Team 1', points: 1034, against: 1024, record: '5-4'},
    {name: 'Team 2', points: 1028, against: 1123, record: '3-6'},
    {name: 'Team 3', points: 1193, against: 1369, record: '8-1'},
    {name: 'Team 4', points: 1123, against: 1123, record: '7-2'},
    {name: 'Team 5', points: 1234, against: 1182, record: '6-3'},
    {name: 'Team 6', points: 1324, against: 1082, record: '4-5'}
  ];

  return (
    <View style={styles.container}>
      {
        teams.map((l, i) => (
          <ListItem 
            key={i}
            bottomDivider
            containerStyle={styles.item}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.text}>{l.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.text}>{l.points}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.text}>{l.against}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.text}>{l.record}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: mainStyles.MAIN_LIGHT
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  item: {
    backgroundColor: mainStyles.MAIN_DARK,
    borderRadius: 10
  }

});

export default LeagueInfo;