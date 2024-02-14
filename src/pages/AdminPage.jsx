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
    Text
} from '@chakra-ui/react'
import getAllData from "../hooks/getAllData";
import { useState } from 'react';
import UpdateUserForm from "../components/UpdateUserForm";


const AdminPage = () => {

    const { data, loading, error } = getAllData("http://localhost:8080/api1/v1/user/getAllUsers");
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleUpdate = (userId) => {
        setSelectedUserId(userId);
    };

    const handleCloseModal = () => {
        setSelectedUserId(null);

    };

    console.log(data)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
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
                        <Th>Update</Th>
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
                                <Button colorScheme='blue' onClick={() => handleUpdate(user.userId)}>
                                    Update
                                </Button>
                                {selectedUserId === user.userId && (
                                    <UpdateUserForm isOpen={true} onClose={handleCloseModal} userId={user.userId} />
                                )}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
export default AdminPage