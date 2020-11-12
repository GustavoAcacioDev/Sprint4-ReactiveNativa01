import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () =>{
    alert(`${email} ${senha}`)
    fetch('', {
      method : 'POST',
      body : {
        email : email,
        senha : senha
      },
      headers : {
        'content-type' : 'application/json',
      } 
    })
    .then(respose => response.json())
    .then(data => alert(data))
  }

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>

      <Text>Email</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        //React - onChange={event => setEmail(event.target.value)}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <StatusBar style="auto" />

      <Text>Senha</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        //React - onChange={event => setEmail(event.target.value)}
        onChangeText={text => setSenha(text)}
        secureTextEntry={true}
        value={senha}
      />
      <StatusBar style="auto" />
      <Button
        onPress={logar}
        title="Login"
        color="#841584"
        accessibilityLabel="Login"
      />
    </View>
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
