import { useNavigation } from '@react-navigation/native'
import { Center, HStack, Heading, Icon, Image, Pressable, Text, VStack, ScrollView } from "native-base";
import { Feather } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'


import LogoSvg from '@assets/logosmall.svg';
import Avatar from '@assets/Avatar.png';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";

export function SignUp(){

  const [show, setShow] = useState(false);

  const { control, handleSubmit } = useForm();

  function handleSignUp(data: any) {
    console.log(data)
  }

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <ScrollView flex={1} bg='base.700' >
      <VStack   borderBottomLeftRadius={24} borderBottomRightRadius={24} mx={12}>
      <Center mt={12}>
        <LogoSvg />
        <Heading mt={4} fontSize={20} >Boas vindas!</Heading>
        <Text color="base.300" fontSize="sm" textAlign='center'>Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
      </Center>

      <Center mt={7} >
      
      <HStack  mb={3}>
        <Image
          source={Avatar}
          defaultSource={Avatar}
          alt='Foto de perfil'
          resizeMode='contain'
        />
        <Pressable  
          onPress={() => (console.log('troca IMG'))}
          justifyContent='center' 
          alignItems='center' 
          padding={3} bg='blue.400' 
          rounded='full' 
          position='absolute'
          bottom={0}
          right={-10}
        > 
          <Icon as={<Feather name={'edit-3'} />} size="md"  _light={{color: "base.600"}}/>
        </Pressable >
      </HStack>

      <Controller 
        control={control}
        name="name"
        render={({field: { onChange, value }}) => (
          <Input 
            placeholder="Nome" 
            autoCapitalize="none"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller 
        control={control}
        name="email"
        render={({field: { onChange, value }}) => (
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
        name="phone"
        render={({field: { onChange, value }}) => (
          <Input 
          placeholder="Telefone"
          keyboardType="number-pad" 
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
        title="Criar"
        bg={"black"}
        onPress={handleSubmit(handleSignUp)}
      />

      </Center>
      </VStack>

      <VStack flex={1} justifyContent='center' >
        <Center mx={12}>
          <Text pb={2}>Já tem uma conta?</Text>
          <Button 
            title="Ir para login"
            variant='black'
            bg='base.500'
            onPress={handleGoBack}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}