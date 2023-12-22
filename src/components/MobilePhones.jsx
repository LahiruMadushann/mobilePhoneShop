import {HStack} from "@chakra-ui/react";
import PhoneCard from "./PhoneCard";
import useMobilePhoneData from "../hooks/useMobilePhoneData";


const MobilePhones = () => {


    const { data, loading, error } = useMobilePhoneData("http://localhost:8080/api1/v1/mobilePhone/getAllmobilePhones");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <HStack spacing={4}>
            {data && data.map((phone, index) => (
                <PhoneCard key={index} phone={phone} />
            ))}
        </HStack>
    );
}
export default MobilePhones;