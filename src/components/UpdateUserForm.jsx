import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';


const UpdateUserForm = ({ isOpen, onClose, userId }) => {
    const [updatedData, setUpdatedData] = useState({});


    const handleUpdate = async () => {
        try {
            // Make an HTTP PUT request to update the user data
            await axios.put(`http://localhost:8080/api1/v1/user/update/${userId}`, updatedData);
            onClose(); // Close the modal after updating
            window.location.reload(true);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update User</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* Form to update user data */}
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            value={updatedData.userName}
                            onChange={(e) => setUpdatedData({ ...updatedData, userName: e.target.value })}
                        />
                        <FormLabel>First Name</FormLabel>
                        <Input
                            type="text"
                            value={updatedData.firstName}
                            onChange={(e) => setUpdatedData({ ...updatedData, firstName: e.target.value })}
                        />
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            type="text"
                            value={updatedData.lastName}
                            onChange={(e) => setUpdatedData({ ...updatedData, lastName: e.target.value })}
                        />
                        <FormLabel>Gender</FormLabel>
                        <Input
                            type="text"
                            value={updatedData.gender}
                            onChange={(e) => setUpdatedData({ ...updatedData, gender: e.target.value })}
                        />
                        <FormLabel>Age</FormLabel>
                        <Input
                            type="number"
                            value={updatedData.age}
                            onChange={(e) => setUpdatedData({ ...updatedData, age: e.target.value })}
                        />
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="text"
                            value={updatedData.email}
                            onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
                        />
                        <FormLabel>City</FormLabel>
                        <Input
                            type="text"
                            value={updatedData.city}
                            onChange={(e) => setUpdatedData({ ...updatedData, city: e.target.value })}
                        />
                        <FormLabel>District</FormLabel>
                        <Input
                            type="text"
                            value={updatedData.district}
                            onChange={(e) => setUpdatedData({ ...updatedData, district: e.target.value })}
                        />
                    </FormControl>
                    {/* Add more form fields for other user data */}

                    <Button colorScheme="blue" onClick={handleUpdate}>
                        Update
                    </Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default UpdateUserForm;
