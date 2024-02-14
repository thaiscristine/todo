import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Button } from '../Button'

type Props = {
  name: string;
  onRemove: () => void;
}

export function TaskItem({ name, onRemove }: Props){
  
  return(
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.buttonCheckTask}
            onPress={onRemove}
            >
            <Text style={styles.buttonText}> ✅ </Text>
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={onRemove}
            >
            <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
    </View>
  )
}