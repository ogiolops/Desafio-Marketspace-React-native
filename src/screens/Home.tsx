import { Header } from '@components/Header';
import { HStack, Heading, Icon, Input, Pressable, Text, VStack, Divider  } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Card } from '@components/Card';

export function Home(){
  return(
    <SafeAreaView>
      <VStack px={6} pt={5}>
        <Header 
        
        />

        <VStack py={8} >
          <Text
            mb={3}
            color='base.300'
          >Seus produtos anunciados para venda </Text>
          <Pressable
            bg='#647AC71A'
            h={66}
            borderRadius={6}
            padding={3}
          >
            <HStack
              alignItems='center'
            >
              <Icon 
                as={Feather}
                name='tag'
                size={22}
                color='blue.100'
              />
              <VStack 
                flex={1} 
                ml={4} 
                justifyContent='center'
                >
                <Heading fontSize='lg' >4</Heading>
                <Text fontSize='xs' >anúncios ativos</Text>
              </VStack>
              <HStack>
                <Heading
                  fontSize='xs'
                  color='blue.100'
                >Meus anúncios</Heading>
                <Icon 
                as={Feather}
                name='arrow-right'
                size={4}
                color='blue.100'
                ml={2}
                />
              </HStack>
            </HStack>
          </Pressable>
        </VStack>

        <VStack>
          <Text
            mb={3}
            color='base.300'
          >Compre produtos variados</Text>
          <HStack>
            <Input
              flex={1}
              height={45}
              placeholder='Buscar anúncio'
              bg='white'
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
              variant="unstyled"
              _focus={{ bg: 'white' }}
            >
            </Input>

            <HStack 
              bg='white' 
              justifyContent='center' 
              alignItems='center'
              borderBottomRightRadius={5}
              borderTopRightRadius={5}
              >
              <Pressable  
                onPress={() => (console.log('open filters'))} 
                justifyContent='center' 
                alignItems='center'
              > 
                <Icon as={<Feather name='search' />} size="md" m={2} _light={{color: 'base.200'}}/>
              </Pressable >

              <Divider orientation="vertical" bg='base.400' height={4} mx={3} ></Divider>

              <Pressable  
                onPress={() => (console.log('open filters'))} 
                justifyContent='center' 
                alignItems='center' mr={3}
              > 
                <Icon as={<Feather name='sliders' />} size="md" m={2} _light={{color: 'base.200'}}/>
              </Pressable >
            </HStack>
          </HStack>
        </VStack>

        <HStack mt={6}>
          <Card />
        </HStack>

        



      </VStack>
    </SafeAreaView>
  )
}