import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AiChat() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI companion. How can I support you today?", isAi: true },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { id: messages.length + 1, text: inputText, isAi: false };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('https://api.a0.dev/ai/llm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are an advanced mental health AI companion, trained in therapeutic approaches including CBT, DBT, and person-centered therapy. Follow these clinical guidelines:
              - Validate emotions, provide coping strategies.
              - Identify crisis situations and provide hotline information.
              - Maintain professionalism while being warm and supportive.`,
            },
            { role: 'user', content: inputText },
          ],
        }),
      });

      const data = await response.json();
      const aiMessage = { id: messages.length + 2, text: data.completion || "Sorry, I couldn't process that.", isAi: true };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { id: messages.length + 2, text: "Something went wrong. Please try again.", isAi: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI Companion</Text>
      </View>

      <ScrollView 
        style={styles.messagesContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map(message => (
          <View 
            key={message.id} 
            style={[styles.messageWrapper, message.isAi ? styles.aiMessageWrapper : styles.userMessageWrapper]}
          >
            <View style={[styles.message, message.isAi ? styles.aiMessage : styles.userMessage]}>
              <Text style={[styles.messageText, message.isAi ? styles.aiMessageText : styles.userMessageText]}>
                {message.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <MaterialCommunityIcons name="send" size={24} color="white" />}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA' },
  header: { padding: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 16, padding: 4 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A' },
  messagesContainer: { flex: 1, padding: 16 },
  messageWrapper: { marginVertical: 4, flexDirection: 'row' },
  aiMessageWrapper: { justifyContent: 'flex-start' },
  userMessageWrapper: { justifyContent: 'flex-end' },
  message: { maxWidth: '80%', padding: 12, borderRadius: 16 },
  aiMessage: { backgroundColor: 'white', borderWidth: 1, borderColor: '#E5E5E5' },
  userMessage: { backgroundColor: '#6B4EFF' },
  messageText: { fontSize: 16, lineHeight: 22 },
  aiMessageText: { color: '#1A1A1A' },
  userMessageText: { color: 'white' },
  inputContainer: { flexDirection: 'row', padding: 16, backgroundColor: 'white' },
  input: { flex: 1, backgroundColor: '#F5F6FA', borderRadius: 24, padding: 12, marginRight: 12, fontSize: 16 },
  sendButton: { backgroundColor: '#6B4EFF', width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center' },
});
