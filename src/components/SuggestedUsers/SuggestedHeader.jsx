import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom"

export default function SuggestedHeader() {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={"./profilepic.png"} alt={"user's profile pic"} size={"lg"}></Avatar>
                <Text fontSize={12} fontWeight={"bold"}>
                    {"user_name"}
                </Text>
            </Flex>
            <Link as={RouteLink} to={"/auth"}
                alignItems={"center"} gap={2} fontSize={14} fontWeight={"medium"}
                cursor={"pointer"} color={"blue.400"}
            >
                Logout
            </Link>
        </Flex>
    )
}
