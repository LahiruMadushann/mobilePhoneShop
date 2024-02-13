import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName:'',
        lastName:'',
        age:'',
        password:'',
        confirmPassword:'',
        email: '',
        district:'',
        city:''

    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            console.error('Password and Confirm Password must match');
            return;
        }

        try {

            const response = await axios.post('http://localhost:8080/api1/v1/user/register', formData);
            console.log('Registration successful:', response.data);

            // Redirect to login page
            // navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <Box p={4}>
            <VStack spacing={4} align="stretch">
                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input type="text" name="username" value={formData.username} onChange={handleChange} />
                </FormControl>

                <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </FormControl>

                <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </FormControl>

                <FormControl id="age">
                    <FormLabel>Age</FormLabel>
                    <Input type="number" name="age" value={formData.age} onChange={handleChange} />
                </FormControl>

                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" value={formData.password} onChange={handleChange} />
                </FormControl>

                <FormControl id="confirmPassword">
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </FormControl>

                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                </FormControl>

                <FormControl id="district">
                    <FormLabel>District</FormLabel>
                    <Input type="text" name="district" value={formData.district} onChange={handleChange} />
                </FormControl>

                <FormControl id="city">
                    <FormLabel>City</FormLabel>
                    <Input type="text" name="city" value={formData.city} onChange={handleChange} />
                </FormControl>


                <Button colorScheme="teal" type="submit" onClick={handleSubmit}>
                    Register
                </Button>
            </VStack>
        </Box>
    );
};

export default Registration;
