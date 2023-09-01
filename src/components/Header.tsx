import { HStack, Text, VStack } from "native-base";

import Avatar from '@assets/Avatar.png';
import { UserPhoto } from "./UserPhoto";
import { Button } from "./Button";
import { ButtonIcon } from "./ButtonIcon";


export function Header (){
  return( 
    <HStack alignItems='center' >
      <UserPhoto 
        size={10}
        source={Avatar}
        alt="Imagem do usuário"
      />

      <VStack ml={3} flex={1}>
        <Text fontSize='md'>Seja bem vindo,</Text>
        <Text fontWeight='bold' fontSize='md' >Giovanni</Text>
      </VStack>

      <ButtonIcon 
        title="Criar Anuncio"
        variant='white'
        name="plus"
        bg='black'
        width={40}
      />

    </HStack>
  )
}