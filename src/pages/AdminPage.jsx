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
import axios from "axios";


const AdminPage = () => {

    const { data, loading, error } = getAllData("http://localhost:8080/api1/v1/user/getAllUsers");

    const handleUpdate = async (userId) => {
        try {
            // Make an HTTP PUT request to update the user data
            await axios.put(`http://localhost:8080/api1/v1/user/update/${userId}`);

        } catch (error) {
            console.error('Error updating user:', error);
        }
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
                            <Td><Button colorScheme='blue' onClick={() => handleUpdate(user.userId)}>Update</Button></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
export default AdminPage