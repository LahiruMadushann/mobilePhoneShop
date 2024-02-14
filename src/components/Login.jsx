import  { useState } from 'react';
import {
    Box,
    FormLabel,
    Input,
    Button,
    Text,
    useToast,

} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setError('');

        try {
            const response = await axios.post(
                'http://localhost:8080/api1/v1/user/login',
                { userName: username, password: password }
            );


            // Handle successful login (store token, redirect, etc.)
            console.log('Login successful:', response.data);
            toast({
                title: 'Login successful!',
                status: 'success',
                isClosable: true,
            });
            navigate('/adminPage');

        } catch (error) {
            console.error('Login error:', error);
            console.log('Detailed Axios error:', error.response); // Logging the detailed Axios error response
            setError('Invalid username or password.');
            toast({
                title: 'Login failed!',
                description: error.message,
                status: 'error',
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <Box as="form" onSubmit={handleSubmit}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                mb={4}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                mb={4}
            />
            <Button type="submit" colorScheme="teal" isLoading={isLoading}>
                Login
            </Button>
            {error && <Text color="red" mt={4}>Invalid username or password.</Text>}

        </Box>
    );
};

export default Login;
