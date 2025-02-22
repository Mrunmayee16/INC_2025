// // app/screens/RegisterScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';

// export default function RegisterScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigation.navigate('Home');  // Navigate after successful registration
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
//       <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 },
//   error: { color: 'red', marginBottom: 10 },
// });


import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { auth } from '@/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (err) {
      setError('Failed to create an account');
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
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
  error: { color: 'red' },
});
