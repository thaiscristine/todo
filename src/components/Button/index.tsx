import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
  onPress: () => void;
}
export function Button({ onPress }: Props){
  
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}> + </Text>
    </TouchableOpacity>
  )
}