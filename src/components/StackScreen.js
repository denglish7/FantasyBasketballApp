import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import * as mainStyles from '../assets/style';

const Stack = createStackNavigator();

const StackScreen = (props) => {

  const header = (
    <View style={styles.headerTitle}>
      <Text style={[styles.headerText, styles.title]}>{props.title}</Text>
      <Text style={[styles.headerText, styles.subtitle]}>{props.leagueName}</Text>
    </View>
  )

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={props.title}
        component={props.component}
        options={{
          title: header,
          headerStyle: styles.header
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: mainStyles.MAIN_DARK,
    borderBottomColor: mainStyles.MAIN_DARK
  },
  headerTitle: {
    color: mainStyles.WHITE,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  headerText: {
    color: mainStyles.WHITE
  },
  subtitle: {
    fontSize: 10
  },
  title: {
    fontSize: 20
  }
});

export default StackScreen;