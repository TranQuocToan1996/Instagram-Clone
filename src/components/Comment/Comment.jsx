import { Avatar, Flex, Text } from "@chakra-ui/react";

export default function Comment({ username, profilePic, createdAt, text }) {
    return (
        <Flex gap={4}>
            <Avatar src={profilePic} name={username} size={"sm"}></Avatar>
            <Flex direction={"column"}>
                <Flex gap={2}>
                    <Text fontWeight={"bold"} fontSize={12}>
                        {username}
                    </Text>
                    <Text fontSize={14}>
                        {text}
                    </Text>
                </Flex>
                <Text fontSize={12} color={"gray"}>
                    {createdAt}
                </Text>
            </Flex>
        </Flex>
    )
}
