import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MusicScreen() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { title: 'Happy', icon: 'emoticon-happy', color: '#FFD700' },
    { title: 'Sad', icon: 'emoticon-sad', color: '#1E90FF' },
    { title: 'Relaxed', icon: 'meditation', color: '#6B8E23' },
    { title: 'Energetic', icon: 'run', color: '#FF4500' },
    { title: 'Focused', icon: 'head-lightbulb', color: '#8A2BE2' },
  ];

  const youtubeLinks = {
    Happy: ['https://www.youtube.com/embed/ZbZSe6N_BXs', 'https://www.youtube.com/embed/ru0K8uYEZWw'],
    Sad: ['https://www.youtube.com/embed/hLQl3WQQoQ0', 'https://www.youtube.com/embed/k4V3Mo61fJM'],
    Relaxed: ['https://www.youtube.com/embed/qYnA9wWFHLI', 'https://www.youtube.com/embed/2JzS8aM4LUQ'],
    Energetic: ['https://www.youtube.com/embed/btPJPFnesV4', 'https://www.youtube.com/embed/Dj4X9U5lPgM'],
    Focused: ['https://www.youtube.com/embed/WPni755-Krg', 'https://www.youtube.com/embed/9fazvbuA1u8'],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Mood</Text>
      <FlatList
        data={moods}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.moodButton, { backgroundColor: item.color }]}
            onPress={() => setSelectedMood(item.title)}
          >
            <MaterialCommunityIcons name={item.icon} size={24} color="white" />
            <Text style={styles.moodText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
      />

      {selectedMood && (
        <View style={styles.videoContainer}>
          <Text style={styles.recommendationTitle}>Videos for {selectedMood} Mood</Text>
          <FlatList
            data={youtubeLinks[selectedMood]}
            renderItem={({ item }) => (
              <WebView
                style={styles.video}
                source={{ uri: item }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
}


// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#FFFFFF' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
//   moodButton: { flex: 1, padding: 15, margin: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
//   moodText: { color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 5 },
//   videoContainer: { marginTop: 20, width: '100%', padding: 10, backgroundColor: '#f9f9f9', borderRadius: 10 },
//   recommendationTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
//   video: { height: 200, width: '100%', marginVertical: 10 },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8F5E9', // Light greenish background for a calming effect
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32', // Deep green for nature-inspired tones
  },
  moodButton: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8, // For Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  moodText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  videoContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  recommendationTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#1B5E20', // Dark green
  },
  video: {
    height: 220,
    width: '100%',
    marginVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  moodButton: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6, // For Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    minWidth: '40%',
    maxWidth: '45%',
  },
  moodText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});