import React from 'react';
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import LeagueScreen from '../containers/LeagueScreen';

const Stack = createStackNavigator();

const StackScreen = (props) => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name={props.title}
        component={props.component}
        options={{
          title: props.title,
          headerTitleStyle: styles.title,
          headerStyle: styles.header
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#04009A',
    borderBottomColor: '#04009A'
  },
  title: {
    color: '#FFFFFF'
  }
});

export default StackScreen;