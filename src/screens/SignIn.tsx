import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorAuthProps } from  '@routes/auth.routes'
import { Center, Heading, Pressable, ScrollView, Text, VStack, Icon } from "native-base";
import { useForm, Controller } from "react-hook-form";

import LogoSvg from '@assets/logomedium.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Feather } from '@expo/vector-icons'
import { useState } from "react";

export function SignIn(){

  const { control, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  function handleSignIn(data: any) {
    console.log(data);
  }

  const navigation = useNavigation<AuthNavigatorAuthProps>();

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return(
    <ScrollView>

      <VStack  bg='base.700' borderBottomLeftRadius={24} borderBottomRightRadius={24} >

        <Center mt={95}>
          <LogoSvg />
          <Heading mt={4} fontSize={35} >Marketspace</Heading>
          <Text color="base.300" fontSize="sm">Seu espaço de compra e venda</Text>
        </Center>

        <Center mt={20} mx={12}>
          <Text mb={3} fontSize="sm" color='base.200' >Acesse sua conta</Text>

          <Controller 
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <Input 
                placeholder="E-mail"
                keyboardType="email-address" 
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller 
            control={control}
            name="password"
            render={({field: { onChange, value }}) => (
              <Input 
              placeholder="Senha"
              onChangeText={onChange}
              value={value}
              type={show ? "text" : "password"}
              InputRightElement={ 
                <Pressable  onPress={() => setShow(!show)} justifyContent='center' alignItems='center' mr={3} > 
                  <Icon as={<Feather name={show ? 'eye' : 'eye-off'} />} size="md" m={2} _light={{color: "gray.300"}}/>
                </Pressable >} 
              />
            )}
          />

          <Button
            title="Entrar"
            bg={"blue.400"}
            mt={8}
            mb={16}
            width='full'
            onPress={handleSubmit(handleSignIn)}
          />
        </Center>
        
      </VStack>

      <VStack mt={9}>
        <Center mx={12} >
            <Text  pb={4}>Ainda não tem acesso?</Text>
            <Button 
              title="Criar uma conta"
              variant='black'
              bg='base.500'
              width='full'
              onPress={handleNewAccount}
            />
        </Center>
      </VStack>

      
    </ScrollView>
  )
}