import React, {useState} from 'react';
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

const Stack = createNativeStackNavigator();

export default function Home(navigation) {
  const [setEmail] = useState('');
  const [setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LogIn</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const ProfileScreen = navigation => {
  return <Text>This is's profile</Text>;
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
