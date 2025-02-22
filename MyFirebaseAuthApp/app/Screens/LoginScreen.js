// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// //import { auth } from '../firebaseConfig';
// import { auth } from '../../firebaseConfig'; // Adjust the path if needed


// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert('Login successful!');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
//       <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 16 },
//   title: { fontSize: 24, marginBottom: 16 },
//   input: { borderWidth: 1, padding: 8, marginBottom: 16 },
// });

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { auth } from '@/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('SignUp')}>Don't have an account? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
  error: { color: 'red' },
});
