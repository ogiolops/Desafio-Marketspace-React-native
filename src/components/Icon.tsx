import { Icon as IconNativeBase, IIconProps } from 'native-base'
import { Feather } from '@expo/vector-icons'

export function Icon(){
  return(
    <IconNativeBase 
      as={Feather}
      name="eye"
      size={7}
      color='#000'
  />
  )
}