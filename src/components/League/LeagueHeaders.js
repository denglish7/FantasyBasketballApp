import React from 'react';
import { StyleSheet, View } from "react-native";
import { ListItem } from 'react-native-elements';

import * as mainStyles from '../../assets/style';

const LeagueHeaders = (props) => {
  return (
    <View style={styles.container}>
      <ListItem 
        bottomDivider
        containerStyle={styles.item}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.text}>Team</ListItem.Title>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Subtitle style={styles.text}>Points Scored</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Subtitle style={styles.text}>Points Against</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Subtitle style={styles.text}>Record</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: mainStyles.MAIN_LIGHT
  },
  text: {
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  title: {
    color: '#FFFFFF',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: mainStyles.MAIN_DARK,
    borderRadius: 10
  }
});

export default LeagueHeaders;