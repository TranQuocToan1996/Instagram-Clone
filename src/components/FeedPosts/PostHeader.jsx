import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function PostHeader({ username, avatar }) {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2} my={1}>
                <Avatar src={avatar} alt={"user's profile pic"} size={"sm"}></Avatar>
                <Flex fontSize={12} fontWeight={"bold"}>
                    {username}
                    <Box color={"gray.500"}>• 1w</Box>
                </Flex>
            </Flex>
            <Flex alignItems={"center"} gap={2}>
                <Box cursor={"pointer"}>
                    <Text fontSize={12}
                        color={"blue.500"}
                        fontWeight={"bold"}
                        _hover={{
                            color: "white"
                        }}
                        transition={"0.2s ease-in-out"}
                    >Unfollow</Text>
                </Box>
            </Flex>
        </Flex>
    )
}
