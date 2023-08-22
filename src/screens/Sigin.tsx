import { Center, Heading, Text, VStack } from "native-base";

import LogoSvg from '@assets/logomedium.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";

export function SignIn(){
  return(
    <VStack flex={1}>

      <VStack flex={1} bg='base.700' borderBottomLeftRadius={24} borderBottomRightRadius={24}>
      <Center mt={95}>
        <LogoSvg />
        <Heading mt={4} fontSize={35} >Marketspace</Heading>
        <Text color="base.300" fontSize="sm">Seu espaço de compra e venda</Text>
      </Center>

      <Center mt={20} mx={12}>
        <Text mb={3} fontSize="sm" color='base.200' >Acesse sua conta</Text>
        <Input 
          placeholder="E-mail"
          keyboardType="email-address" 
          autoCapitalize="none"
        />
        <Input 
          placeholder="Senha"
          secureTextEntry
          mb={6}
        />

        <Button
          title="Entrar"
          bg={"blue.400"}
          mb={6}
        />
      </Center>
      </VStack>

      <VStack flex={1} maxH={48} >
        <Center mx={12} flex={1}>
          <Text pb={2}>Ainda não tem acesso?</Text>
          <Button 
            title="Criar uma conta"
            variant='black'
            bg='base.500'
          />
        </Center>
      </VStack>
      

    </VStack>
  )
}