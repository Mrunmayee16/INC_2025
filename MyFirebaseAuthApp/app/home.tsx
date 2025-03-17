// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { getAuth, signOut, User } from 'firebase/auth';
// import { router } from 'expo-router'; // Import the router for navigation

// export default function HomeScreen() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         router.replace('/login'); // Redirect to login if not logged in
//       }
//       setLoading(false);
//     });

//     return unsubscribe; // Cleanup subscription
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.replace('/login'); // Redirect to login after logout
//     } catch (error) {
//       console.error('Logout Error:', error);
//     }
//   };

//   const navigateToTodoList = () => {
//     router.push('/TodoList'); // Navigate to the Todo List screen (assuming it's /todo route)
//   };
//   // const navigateToDoctorList = () => {
//   //   router.push('/DoctorList'); 
//   // };

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#6200ee" />
//       </View>
//     );
//   }

//   return (
  
//     <View style={styles.container}>
//       <Text style={styles.title}>🎉 Welcome to the App!</Text>
//       <Text style={styles.subtitle}>Logged in as: {user?.email}</Text>

//       {/* Button to access the To-Do List */}
//       <TouchableOpacity style={styles.button} onPress={navigateToTodoList}>
//         <Text style={styles.buttonText}>Go to To-Do List</Text>
//       </TouchableOpacity>
       
     

//       {/* Logout Button */}
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
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
//     backgroundColor: '#fff',
//   },
//   description: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 32,
//   },
//   button: {
//     backgroundColor: '#6200ee',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 8,
//     marginVertical: 10, // Added margin between buttons
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getAuth, signOut, User } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { router } from 'expo-router'; 

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
      router.replace('/login'); // Redirect to login after logout
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome to the App!</Text>
      <Text style={styles.subtitle}>Logged in as: {user?.email}</Text>

      {/* Button to access the To-Do List */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TodoList')}>
        <Text style={styles.buttonText}>Go to To-Do List</Text>
      </TouchableOpacity>

      {/* Button to access the Doctor List */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorList')}>
        <Text style={styles.buttonText}>Go to Doctor List</Text>
      </TouchableOpacity>
      {/* Button to access the Tips*/}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tips')}>
  <Text style={styles.buttonText}>Go to Tips</Text>
</TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tips')}>
        <Text style={styles.buttonText}>Go to Tips</Text>
      </TouchableOpacity> */}


      {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

