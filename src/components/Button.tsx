import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string;
  variant?: 'black'| 'white';
}

export function Button({title, variant='white', ...rest }: Props){
  return(
    <ButtonNativeBase 
      w='full'
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