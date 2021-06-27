import React from 'react';
import StackScreen from './src/components/StackScreen';
import LeagueScreen from './src/containers/LeagueScreen';
import TeamScreen from './src/containers/TeamScreen';
import MatchupScreen from './src/containers/MatchupScreen';
import PlayersScreen from './src/containers/PlayersScreen';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#000000',
          }}
        >
          <Tab.Screen
            name="League" 
            component={LeagueStackScreen}
            options={{
              title: 'League'
            }}
          />
          <Tab.Screen
            name="Team" 
            component={TeamStackScreen}
            options={{
              title: 'Team'
            }}
          />

          <Tab.Screen 
            name="Players" 
            component={PlayersStackScreen}
            options={{
              title: 'Players'
            }}
          />

          <Tab.Screen 
            name="Matchup" 
            component={MatchupStackScreen}
            options={{
              title: 'Matchup'
            }}
          />
          
        </Tab.Navigator>
      </NavigationContainer>
    
  );
}

const LeagueStackScreen = () => {
  const League = () => {return <LeagueScreen />}
  return (
    <StackScreen title="League" leagueName="Dabu League" component={League}/>
  );
}

const TeamStackScreen = () => {
  return (
    <StackScreen title="Team" component={TeamScreen}/>
  );
}

const PlayersStackScreen = () => {
  return (
    <StackScreen title="Players" component={PlayersScreen}/>
  );
}

const MatchupStackScreen = () => {
  return (
    <StackScreen title="Matchup" component={MatchupScreen}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
