import { Grid, GridItem} from "@chakra-ui/react";
import PhoneCard from "./PhoneCard";
import getAllData from "../hooks/getAllData";


const MobilePhones = () => {


    const { data, loading, error } = getAllData("http://localhost:8080/api1/v1/mobilePhone/getAllmobilePhones");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" }}
            gap={6}
        >
            {data && data.map((phone, index) => (
                <GridItem key={index} colSpan={1}>
                <PhoneCard  phone={phone} />
                </GridItem>
            ))}
        </Grid>
    );
}
export default MobilePhones;