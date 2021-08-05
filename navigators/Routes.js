import React from 'react';

import { Colors } from '../components/styles';
const { tertiary } = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Ionicons, Entypo  } from '@expo/vector-icons';

import { CredencialContext } from '../components/CredencialContext';

import Login from '../pages/Login';
import Biblioteca from '../pages/Biblioteca';
import Favoritos from '../pages/Favoritos';
import Perfil from '../pages/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen
        options={{tabBarIcon: ({color}) => <Ionicons name="md-library" size={20} color={color} />}}
        name="Biblioteca" 
        component={Biblioteca} />
      <Tab.Screen
        options={{tabBarIcon: ({color}) => <Ionicons name="star-sharp" size={20} color={color} />}}
        name="Favoritos" 
        component={Favoritos} />
      <Tab.Screen
        options={{tabBarIcon: ({color}) => <Entypo name="user" size={20} color={color} />}}
        name="Perfil" 
        component={Perfil} />
    </Tab.Navigator>
  )
}

const Routes = () => {
  return (
    <CredencialContext.Consumer>
      {({ credenciais }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: tertiary,
              headerTransparent: true,
              headerTitle: '',
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
            }}
          >
            {credenciais ? (
              <Stack.Screen
                name="Main"
                component={MyTabs}
              />
            ) : (
              
                <Stack.Screen name="Login" component={Login} />
              
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredencialContext.Consumer>
  );
};

export default Routes;
