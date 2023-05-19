import React, { useState } from 'react';
import {
    ChakraProvider,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Spacer,
    Box,
    theme,
  } from '@chakra-ui/react';

  import { ColorModeSwitcher } from '../ColorModeSwitcher';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    // Perform login logic here
    // You can use the entered username and password for authentication
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <ChakraProvider theme={theme}>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            backgroundColor="gray.100"
            >
                <Box width="400px" p={8} backgroundColor="white" borderRadius="md" boxShadow="md">
                    <Heading as="h1" size="lg" textAlign="center" mb={6}>
                    Login
                    </Heading>
                    <FormControl id="username" mb={4}>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </FormControl>
                    <FormControl id="password" mb={6}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </FormControl>
                    <Button colorScheme="blue" size="lg" onClick={handleLogin} isFullWidth>
                    Log In
                    </Button>
                </Box>
            </Box>
        </ChakraProvider>
    );
};

export default LoginPage;