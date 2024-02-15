import React, { useState } from 'react'
import { FlatList, Text, TextInput, View, Alert, Image } from 'react-native'
import { Button } from '../../components/Button'
import { TaskItem } from '../../components/TaskItem'
import { styles } from './styles'

type TaskItem = {
  title: string;
  done: boolean;
}

export function Home(){

  const [tasks, setTasks] = useState<TaskItem[]>([{ title: 'Task 1', done: true}, { title: 'Task 2', done: true}])
  const [taskItem, setTaskItem] = useState('')

  const totalTasksDone = tasks.filter(task => task.done).length;

  function handleTaskItemkAdd(){
    const isTaskDuplicated = tasks.some(task => task.title === taskItem)

    if (isTaskDuplicated) {
      return Alert.alert('Duplicated task', `This task already exists in the list`)
    }

    const newTask: TaskItem = {
      title: taskItem,
      done: false
    };

    setTasks(prevState => [...tasks, newTask]);
    setTaskItem('');
  }

  function handleMarkTaskItemDone(taskTitle: string) {
    setTasks(prevState => prevState.map(taskItem => {
      if (taskItem.title === taskTitle) {
        taskItem.done = !taskItem.done;
      }
      return taskItem;
    }))
  }

  function handleTaskItemRemove(taskTitle: string) {
    
    Alert.alert('Remove task', `Do you want to remove the task "${taskTitle}"?`, [
      {
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => setTasks(prevState => prevState.filter(taskItem => taskItem.title !== taskTitle))
      }
    ])
  }

  return(
    <View style={styles.container}>
      
      <Image
        source={require('../../../assets/Logo.png')}
      />

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Add a new task'
          placeholderTextColor={'#6b6b6b'}
          keyboardType='email-address'
          onChangeText={setTaskItem}
          value={taskItem}
        />
        <Button 
          onPress={() => handleTaskItemkAdd()}
        />        
      </View>

      <View style={styles.listStatus}>
        <View style={styles.column}>
          <Text style={styles.totalsLabel}>Tasks</Text>
          <View style={styles.numberTasks}>
            <Text style={styles.column}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.totalsLabel}>Done</Text>
          <View style={styles.numberDone}>
            <Text style={styles.column}>{totalTasksDone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>

      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem
            item={item}
            onRemove={() => handleTaskItemRemove(item.title)}
            onMarkDone={() => handleMarkTaskItemDone(item.title)}
          /> 
        )} 
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>You don't have a task yet</Text>
        )}

      />
    </View>
  )
}