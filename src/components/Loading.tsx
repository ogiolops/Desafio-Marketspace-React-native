import { Center, Spinner } from "native-base";

export function Loading(){
  return(
    <Center flex={1} bg='base.700'>
      <Spinner color='blue.100'/>
    </Center>
  )
}