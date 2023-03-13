import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  // Image,
  navigation,
} from 'react-native';
import Login from './Screens/Login';
import Home from './Screens/Home';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// eslint-disable-next-line no-shadow
// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
//     />
//   );
// };
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  text: {
    fontSize: 30,
    paddingBottom: 50,
    color: 'black',
  },
  inputView: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    borderColor: 'black',
  },
  TextInput: {
    height: 50,
    paddingLeft: 20,
    marginLeft: 0,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
});
