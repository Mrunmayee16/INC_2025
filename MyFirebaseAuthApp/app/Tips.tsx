import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const tips = [
  { id: '1', text: 'Practice deep breathing to calm your mind.', icon: 'leaf-outline' },
  { id: '2', text: 'Engage in physical activities like yoga or jogging.', icon: 'walk' },
  { id: '3', text: 'Listen to relaxing music or meditate.', icon: 'musical-notes' },
  { id: '4', text: 'Write down your thoughts in a journal.', icon: 'book' },
  { id: '5', text: 'Maintain a healthy sleep schedule.', icon: 'bed' },
  { id: '6', text: 'Spend time with loved ones or pets.', icon: 'people' },
  { id: '7', text: 'Take short breaks and avoid overworking.', icon: 'timer' },
  { id: '8', text: 'Limit screen time and social media usage.', icon: 'phone-portrait' },
  { id: '9', text: 'Try creative hobbies like painting or reading.', icon: 'color-palette' },
  { id: '10', text: 'Seek professional help if stress becomes overwhelming.', icon: 'heart' },
];

const Tips = () => {
  return (
    <LinearGradient colors={['#a18cd1', '#fbc2eb']} style={styles.container}>
      <Text style={styles.header}>💡 Stress Management Tips</Text>
      <FlatList
        data={tips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TipCard tip={item.text} icon={item.icon} />}
      />
    </LinearGradient>
  );
};

const TipCard = ({ tip, icon }) => {
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      <Ionicons name={icon} size={24} color="#ff6f61" style={styles.icon} />
      <Text style={styles.tipText}>{tip}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.81)',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    width: '95%',
  },
  icon: {
    marginRight: 10,
  },
  tipText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flexShrink: 1,
  },
});

export default Tips;
