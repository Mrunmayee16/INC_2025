// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
// import { getAuth, signOut, onAuthStateChanged, User } from 'firebase/auth';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// // Define the type for navigation parameters
// type RootStackParamList = {
//   Login: undefined;
//   TodoList: undefined;
//   DoctorList: undefined;
//   Tips: undefined;
//   Music: undefined;
//   Exercise: undefined;
//   AiChat: undefined;
// };

// type MenuItem = {
//   title: string;
//   screen: keyof RootStackParamList;
// };

// export default function HomeScreen() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       try {
//         setUser(currentUser);
//         setLoading(false);
//         if (!currentUser) {
//           navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
//         }
//       } catch (error) {
//         console.error('Auth State Change Error:', error);
//       }
//     });

//     return unsubscribe;
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
//     } catch (error) {
//       console.error('Logout Error:', error);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   const menuItems: MenuItem[] = [
//     { title: 'To-Do List', screen: 'TodoList' },
//     { title: 'Doctor List', screen: 'DoctorList' },
//     { title: 'Tips', screen: 'Tips' },
//     { title: 'Music', screen: 'Music' },
//     { title: 'Exercise', screen: 'Exercise' },
//     { title: 'Journal', screen: 'Journal' },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Breathe. Focus. Achieve. Welcome to InnerPeace!</Text>
//       <Text style={styles.subtitle}>Logged in as: {user?.email || 'Unknown User'}</Text>

//       {/* Grid Menu */}
//       <FlatList
//         data={menuItems}
//         numColumns={2}
//         contentContainerStyle={styles.gridContainer}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.screen)}>
//             <Text style={styles.buttonText}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.screen}
//       />

//       {/* Logout Button */}
//       <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>

//       {/* AI Chat Panel */}
//       <TouchableOpacity style={styles.aiChatPanel} onPress={() => navigation.navigate('AiChat')}>
//         <MaterialCommunityIcons name="robot" size={24} color="#fff" />
//         <Text style={styles.aiChatText}>Chat with AI</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#333',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   gridContainer: {
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#03DAC5',
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     marginVertical: 10,
//     width: '45%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: '2.5%',
//     elevation: 3,
//   },
//   buttonText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     textAlign: 'center',
//     flexWrap: 'wrap', // Allows long text to wrap instead of cutting off
//     width: '100%', // Ensures proper spacing inside the button
//   },
//   logoutButton: {
//     backgroundColor: '#B00020',
//     width: '90%',
//     marginTop: 20,
//     marginBottom: 100, // Increased space to avoid overlap
//   },
//   aiChatPanel: {
//     position: 'absolute',
//     bottom: 20,
//     width: '90%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#6B4EFF',
//     padding: 15,
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 2, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   aiChatText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
// });

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getAuth, signOut, User } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigation.replace('Login'); // Redirect to login if not logged in
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login'); // Redirect to login after logout
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breathe. Focus. Achieve.</Text>
      <Text style={styles.subtitle}>Welcome to InnerPeace, {user?.email}!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TodoList')}>
          <Text style={styles.buttonText}>To-Do List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorList')}>
          <Text style={styles.buttonText}>Doctor List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tips')}>
          <Text style={styles.buttonText}>Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Music')}>
          <Text style={styles.buttonText}>Music</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Exercise')}>
          <Text style={styles.buttonText}>Exercise</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AiChat')}>
          <Text style={styles.buttonText}>AI Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Journal')}>
          <Text style={styles.buttonText}>Journal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#FFFFFF' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10, color: '#333', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20, textAlign: 'center', fontStyle: 'italic' },
  buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' },
  button: { backgroundColor: '#03DAC5', paddingVertical: 14, paddingHorizontal: 20, borderRadius: 12, marginVertical: 10, width: '48%', alignItems: 'center' },
  buttonText: { color: '#000', fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' },
  logoutButton: { backgroundColor: '#B00020' },
});

