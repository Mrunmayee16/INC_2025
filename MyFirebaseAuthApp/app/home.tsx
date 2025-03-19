// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { getAuth, signOut, User } from 'firebase/auth';
// import { useNavigation } from '@react-navigation/native'; // Import navigation hook
// import { router } from 'expo-router'; 

// export default function HomeScreen() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();

//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         navigation.replace('Login'); // Redirect to login if not logged in
//       }
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

  
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.replace('/login'); // Redirect to login after logout
//     } catch (error) {
//       console.error('Logout Error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🎉 Welcome to the App!</Text>
//       <Text style={styles.subtitle}>Logged in as: {user?.email}</Text>

//       {/* Button to access the To-Do List */}
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TodoList')}>
//         <Text style={styles.buttonText}>Go to To-Do List</Text>
//       </TouchableOpacity>

//       {/* Button to access the Doctor List */}
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorList')}>
//         <Text style={styles.buttonText}>Go to Doctor List</Text>
//       </TouchableOpacity>
//       {/* Button to access the Tips*/}
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tips')}>
//   <Text style={styles.buttonText}>Go to Tips</Text>
// </TouchableOpacity>

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
//     marginVertical: 10,
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
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const router = useRouter(); // Added router for navigation fix
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

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breathe. Focus. Achieve. Welcome to InnerPeace!</Text>
      <Text style={styles.subtitle}>Logged in as: {user?.email}</Text>

      {/* Button Container for All Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TodoList')}>
          <Text style={styles.buttonText}>Go to To-Do List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorList')}>
          <Text style={styles.buttonText}>Go to Doctor List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tips')}>
          <Text style={styles.buttonText}>Go to Tips</Text>
        </TouchableOpacity>

        {/* Added Music and Exercise Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Music')}>
          <Text style={styles.buttonText}>Go to Music</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Exercise')}>
          <Text style={styles.buttonText}>Go to Exercise</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#03DAC5',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
    width: '48%', // Buttons take half width
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#B00020',
  },
});