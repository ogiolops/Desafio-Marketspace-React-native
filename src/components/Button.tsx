import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'
import { Icon } from './Icon';

type Props = IButtonProps & {
  title: string;
  variant?: 'black'| 'white';
}

export function Button({title, variant='white',  ...rest }: Props){
  return(
    <ButtonNativeBase 
      h={12}
      {...rest} 
    >
      <Text
        fontSize='md'
        fontWeight='bold'
        color={ variant === "white" ? 'white' : "black"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}