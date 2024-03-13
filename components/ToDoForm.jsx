import React, {useState} from 'react';
import {Button, View} from 'react-native';
import styled from 'styled-components/native';

const ToDoForm = ({addTask}) => {
  const [input, setInput] = useState('');
  const handleChangeText = text => {
    setInput(text);
  };
  const handlePress = () => {
    addTask(input);
    setInput('');
  };

  return (
      <View>
        <UserInput
          placeholder="Add a new task"
          onChangeText={handleChangeText}
          value={input}
        />
        <AddButton>
          <Button title="Add" onPress={handlePress} />
        </AddButton>
      </View>
  );
};

export default ToDoForm;

const UserInput = styled.TextInput`
  background-color: pink;
  font-size: 16;
  padding-left: 8px;
  height: 56px;
  margin: 16px;
  border-radius: 8px;
`;
const AddButton = styled.View`
  justify-content: center;
  background-color: pink;
  font-size: 16px;
  height: 56px;
  margin: 16px;
  border-radius: 8px;
`;
