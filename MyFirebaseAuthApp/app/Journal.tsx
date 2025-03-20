// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// export default function JournalScreen() {
//   const [entry, setEntry] = useState('');
//   const auth = getAuth();
//   const db = getFirestore();

//   const saveEntry = async () => {
//     if (!entry.trim()) return;
    
//     try {
//       await addDoc(collection(db, 'journals'), {
//         userId: auth.currentUser?.uid,
//         text: entry,
//         timestamp: new Date()
//       });
//       setEntry('');
//       alert('Entry saved!');
//     } catch (error) {
//       console.error('Error saving entry:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Write Your Thoughts</Text>
//       <ScrollView>
//         <TextInput
//           style={styles.input}
//           multiline
//           placeholder="Express yourself..."
//           value={entry}
//           onChangeText={setEntry}
//         />
//       </ScrollView>
//       <TouchableOpacity style={styles.saveButton} onPress={saveEntry}>
//         <Text style={styles.saveButtonText}>Save Entry</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
//   input: { height: 200, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, fontSize: 16, backgroundColor: '#f9f9f9' },
//   saveButton: { backgroundColor: '#03DAC5', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
//   saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, AsyncStorage } from 'react-native';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);

  // Load saved journal entries
  useEffect(() => {
    const loadEntries = async () => {
      try {
        const storedEntries = await AsyncStorage.getItem('journalEntries');
        if (storedEntries) {
          setJournalEntries(JSON.parse(storedEntries));
        }
      } catch (error) {
        console.error('Error loading journal entries:', error);
      }
    };
    loadEntries();
  }, []);

  // Save new journal entry
  const handleSave = async () => {
    if (!entry.trim()) return;

    const newEntries = [{ text: entry, date: new Date().toLocaleString() }, ...journalEntries];
    setJournalEntries(newEntries);
    setEntry('');

    try {
      await AsyncStorage.setItem('journalEntries', JSON.stringify(newEntries));
    } catch (error) {
      console.error('Error saving journal entry:', error);
    }
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
        {journalEntries.map((item, index) => (
          <View key={index} style={styles.entry}>
            <Text style={styles.entryText}>{item.text}</Text>
            <Text style={styles.entryDate}>{item.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  textInput: { height: 100, borderColor: '#DDD', borderWidth: 1, padding: 10, borderRadius: 8, textAlignVertical: 'top' },
  saveButton: { backgroundColor: '#007BFF', padding: 14, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  saveButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  entryList: { marginTop: 20 },
  entry: { padding: 15, backgroundColor: '#F0F0F0', marginBottom: 10, borderRadius: 8 },
  entryText: { fontSize: 16, color: '#333' },
  entryDate: { fontSize: 12, color: '#777', marginTop: 5, textAlign: 'right' },
});