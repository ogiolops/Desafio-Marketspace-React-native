import { Input as NativeBaseInput,IInputProps, IPressableProps, Icon, Pressable } from 'native-base'

import { Feather } from '@expo/vector-icons'

type Props = IInputProps & IPressableProps & {
  title?: string;
}

export function Input({title, ...rest}: Props){
  return(
    <NativeBaseInput 
      mb={3}
      bg='white'
      borderWidth={0}
      h={12}
      px={4}
      color='base.300'
      fontSize='md'
      placeholderTextColor='base.400'
      _focus={{
        bg: 'white',
        borderWidth: 1,
        borderColor: "base.300"
      }}
      {...rest}
      
    />
  );
}