import { Icon as IconNativeBase, IIconProps } from 'native-base'
import { Feather } from '@expo/vector-icons';

type Props =  IIconProps & {
  name: string;
  color: string;
}

export function Icon({name, color, ...rest}: Props){
  return(
    <IconNativeBase 
      as={Feather}
      name={name}
      size={4}
      color={color}
      {...rest}
  />
  )
}