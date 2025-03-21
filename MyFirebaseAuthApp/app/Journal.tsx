//Journal working but all users see all data
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { database, ref, push, onValue } from '../firebaseConfig';

// export default function Journal() {
//   const [entry, setEntry] = useState('');
//   const [journalEntries, setJournalEntries] = useState([]);

//   // Load saved journal entries from Firebase
//   useEffect(() => {
//     const entriesRef = ref(database, 'journalEntries');
//     const unsubscribe = onValue(entriesRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const entriesArray = Object.values(data); // Convert object to array
//         setJournalEntries(entriesArray.reverse()); // Show latest first
//       } else {
//         setJournalEntries([]);
//       }
//     });
//     return () => unsubscribe(); // Cleanup listener on unmount
//   }, []);

//   // Save new journal entry to Firebase
//   const handleSave = () => {
//     if (!entry.trim()) return;

//     const newEntry = { text: entry, date: new Date().toLocaleString() };
//     const entriesRef = ref(database, 'journalEntries');
//     push(entriesRef, newEntry); // Add to Firebase

//     setEntry(''); // Clear input
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Your Journal</Text>
      
//       {/* Input Box */}
//       <TextInput
//         style={styles.textInput}
//         placeholder="Write your thoughts..."
//         value={entry}
//         onChangeText={setEntry}
//         multiline
//       />

//       {/* Save Button */}
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.saveButtonText}>Save Entry</Text>
//       </TouchableOpacity>

//       {/* Display Past Entries */}
//       <ScrollView style={styles.entryList}>
//         {journalEntries.map((item, index) => (
//           <View key={index} style={styles.entry}>
//             <Text style={styles.entryText}>{item.text}</Text>
//             <Text style={styles.entryDate}>{item.date}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
//   title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
//   textInput: { height: 100, borderColor: '#DDD', borderWidth: 1, padding: 10, borderRadius: 8, textAlignVertical: 'top' },
//   saveButton: { backgroundColor: '#007BFF', padding: 14, borderRadius: 8, marginTop: 10, alignItems: 'center' },
//   saveButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
//   entryList: { marginTop: 20 },
//   entry: { padding: 15, backgroundColor: '#F0F0F0', marginBottom: 10, borderRadius: 8 },
//   entryText: { fontSize: 16, color: '#333' },
//   entryDate: { fontSize: 12, color: '#777', marginTop: 5, textAlign: 'right' },
// });


//Journal working with each user sees its own data
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { database, ref, push, onValue } from '../firebaseConfig';
import { getAuth } from 'firebase/auth'; // Firebase Authentication
import { DataSnapshot } from 'firebase/database';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState<{ id: string; text: string; date: string }[]>([]);
  const auth = getAuth(); // Get Firebase auth instance

  // Load saved journal entries for the logged-in user
  useEffect(() => {
    if (!auth.currentUser) return; // Ensure user is logged in

    const userId = auth.currentUser.uid;
    const entriesRef = ref(database, `journalEntries/${userId}`);

    const unsubscribe = onValue(entriesRef, (snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const entriesArray = Object.keys(data).map((key) => ({
          id: key,
          text: data[key].text,
          date: data[key].date,
        }));
        setJournalEntries(entriesArray.reverse()); // Show latest first
      } else {
        setJournalEntries([]);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [auth.currentUser]);

  // Save new journal entry to Firebase under the user's UID
  const handleSave = () => {
    if (!entry.trim() || !auth.currentUser) return;

    const userId = auth.currentUser.uid;
    const entriesRef = ref(database, `journalEntries/${userId}`);
    const newEntry = { text: entry, date: new Date().toLocaleString() };

    push(entriesRef, newEntry); // Save to Firebase
    setEntry(''); // Clear input
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Journal</Text>

      {/* Input Box */}
      <TextInput
        style={styles.textInput}
        placeholder="Write your thoughts..."
        value={entry}
        onChangeText={setEntry}
        multiline
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Entry</Text>
      </TouchableOpacity>

      {/* Display Past Entries */}
      <ScrollView style={styles.entryList}>
        {journalEntries.map((item) => (
          <View key={item.id} style={styles.entry}>
            <Text style={styles.entryText}>{item.text}</Text>
            <Text style={styles.entryDate}>{item.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E3F2FD' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#0D47A1', marginBottom: 20 },
  textInput: {
    height: 100,
    borderColor: '#1E88E5',
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#0D47A1',
  },
  saveButton: {
    backgroundColor: '#1976D2',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    borderColor: '#1565C0',
    borderWidth: 2,
    elevation: 5,
  },
  saveButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  entryList: { marginTop: 20 },
  entry: {
    padding: 15,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  entryText: { fontSize: 16, color: '#333' },
  entryDate: { fontSize: 12, color: '#777', marginTop: 5, textAlign: 'right' },
});

//export default Journal;
