import {HStack} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import axios from "axios";

const MobilePhones = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8080/api1/v1/mobilePhone/getAllmobilePhones").then(response =>{
            setData(response.data);
            console.log("Data New",data);
        })
    });
    return (
        <HStack>
            hi
        </HStack>
    );
}
export default MobilePhones;