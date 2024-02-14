import React, { useState } from 'react'
import { FlatList, Text, TextInput, View, Alert, Image } from 'react-native'
import { Button } from '../../components/Button'
import { TaskItem } from '../../components/TaskItem'
import { styles } from './styles'

export function Home(){

  const [tasks, setTasks] = useState<string[]>([])
  const [taskItem, setTaskItem] = useState('')

  function handleTaskItemkAdd(){
    if(tasks.includes(taskItem)){
      return Alert.alert('Duplicated task', `This task already exists in the list`)
    }   
    setTasks(prevState => [...prevState, taskItem])
    setTaskItem('')
  }

  function handleTaskItemRemove(task: string) {
    
    Alert.alert('Remove task', `Do you want to remove the task "${task}"?`, [
      {
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => setTasks(prevState => prevState.filter(taskItem => taskItem !== task))
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
        <Text style={styles.totalTasksLabel}>Tasks {tasks.length}</Text>
        <Text style={styles.totalDoneLabel}>Done</Text>
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
            key={index} 
            name={item} 
            onRemove={() => handleTaskItemRemove(item)} 
          /> 
        )} 
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>You don't have a task yet</Text>
        )}

      />
    </View>
  )
}