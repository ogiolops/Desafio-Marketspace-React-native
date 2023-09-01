import { Icon as IconNativeBase, Button as ButtonNativeBase, IButtonProps, Text, IIconProps, Heading } from 'native-base'
import { Feather } from '@expo/vector-icons'

type Props = IButtonProps & IIconProps & {
  title: string;
  variant?: 'black'| 'white';
  name: string;
}

export function ButtonIcon({title, variant='white', name,  ...rest }: Props){
  return(
    <ButtonNativeBase
      h={12}
      alignItems='center'
      padding={3}
      leftIcon={
        <IconNativeBase 
        mr={1}
        as={Feather}
        name={name}
        size={4}
        color={ variant === "white" ? 'white' : "black"}
        {...rest}
      />
      }
      {...rest} 
    >

      <Heading
        fontSize='sm'
        fontFamily='body'
        color={ variant === "white" ? 'white' : "black"}
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}