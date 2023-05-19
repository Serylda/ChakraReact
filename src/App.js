import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Stack,
  Code,
  Grid,
  theme,
  Flex,
  Checkbox,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme} >
      <ColorModeSwitcher justifySelf="flex-end" />
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
        <Box textAlign="center" fontSize="xl" bgImage= "url('bcg.webp')">
          <Grid minH="100vh" p={30}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Logo h="40vmin" pointerEvents="none" />
              <Box
                rounded={'lg'}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <Stack spacing={10} minW={'sm'}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox>Remember me</Checkbox>
                    </Stack>
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
