import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
  item: {
    title: string;
    done: boolean;
  };
  onRemove: () => void;
  onMarkDone: () => void;
}

export function TaskItem({ item, onRemove, onMarkDone }: Props){
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonCheckTask}
        onPress={onMarkDone}
      >
        <Text style={styles.buttonText}>
          {item.done ? '☑' : '🙈'}
        </Text>
      </TouchableOpacity>
      <Text style={item.done ? styles.titleDone : styles.title}>{item.title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>
          <Image source={require('../../../assets/trash.png')} />
        </Text>
      </TouchableOpacity>
    </View>
  )
}