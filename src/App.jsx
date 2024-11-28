// src/App.jsx
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput } from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    // Avoid adding empty or duplicate tasks
    if (taskText.trim() && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo List</Text>
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet. Add a new task!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  task: {
    fontSize: 18,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});
