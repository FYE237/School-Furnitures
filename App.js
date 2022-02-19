import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import CreateAccount from './Component/CreateAccount';
import LoginScreen from './Component/Login';

/* import CreateAccountStyles from './Styles/CreateAccountStyles';
 */

const Stack=createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login" 
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
