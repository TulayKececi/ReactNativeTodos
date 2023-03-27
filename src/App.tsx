import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

function App() {
  const [todos, setTodos] = useState([]);
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(-1);

  const handleSaveButton = () => {
    setTodos([...todos, textInputValue]);
    setTextInputValue('');
  }

  const renderTodos = () => {
    return todos.map((todo, index) => {
      const isSelected = selectedTodoIndex === index;
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelectedTodoIndex(index);
          }}
        >
          <Text
            key={index}
            style={[
              styles.todoItem,
              isSelected ? styles.todoItemSelected : null,
              { textDecorationLine: isSelected ? 'line-through' : 'none' }
            ]}
          >
            {todo}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Yapılacaklar ({todos.length})</Text>
      <View style={styles.todo}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Yapılacak...'
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSaveButton}>
            <Text style={styles.buttonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.todosContainer}>
          {renderTodos()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
  },
  todo: {
    backgroundColor: 'gray',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'flex-end',
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 20,
  },
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',

  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    marginHorizontal: 10,
  },
  todosContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  todoItem: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
  },
  todoItemSelected: {
    color: 'green',
  },
  button: {
    backgroundColor: '#dcdcdc',
    marginLeft: 10,
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#000',
  },
});

export default App;


