import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import styled from 'styled-components/native';

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAddTask = task => {
    tasks.map(item => item.toLowerCase()).indexOf(task.toLowerCase()) > 0
      ? setTasks(tasks)
      : setTasks([...tasks, task]);
  };
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={handleAddTask} />
      <TasksList>
        {tasks.map(task => {
          return <TextContent>{task}</TextContent>;
        })}
      </TasksList>
    </SafeAreaView>
  );
};
export default App;

const TasksList = styled.View`
  justify-content: center;
  align-items: center;
  background-color: pink;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
`;
const TextContent = styled.Text`
  font-size: 16px;
  color: gray;
  font-family: 'Franklin Gothic Medium';
`;
