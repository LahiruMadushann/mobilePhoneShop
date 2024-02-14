import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Text, useDisclosure,

} from '@chakra-ui/react'
import getAllData from "../hooks/getAllData";
import React, { useState } from 'react';
import axios from "axios";
import DeleteConformation from "./DeleteConformation";



const DeleteUser = () => {

    const { data, loading, error } = getAllData("http://localhost:8080/api1/v1/user/getAllUsers");

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();

    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleDelete = async (userId) => {
        setSelectedUserId(userId);
        onOpen();
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api1/v1/user/delete/${selectedUserId}`);
            onClose();
            window.location.reload(true);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };


    console.log(data)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <>
        <TableContainer>
            <Table size="sm">
                <Thead>
                    <Tr>
                        <Th>Username</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Gender</Th>
                        <Th>Age</Th>
                        <Th>Email</Th>
                        <Th>City</Th>
                        <Th>District</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((user) => (
                        <Tr key={user.userId}>
                            <Td>{user.userName}</Td>
                            <Td>{user.firstName}</Td>
                            <Td>{user.lastName}</Td>
                            <Td>{user.gender}</Td>
                            <Td>{user.age}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.city}</Td>
                            <Td>{user.district}</Td>
                            <Td>
                                <Button colorScheme='red' onClick={() => handleDelete(user.userId)}>
                                    Delete
                                </Button>

                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
        <DeleteConformation
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={confirmDelete}
            cancelRef={cancelRef}
         />

        </>
    )
}
export default DeleteUser