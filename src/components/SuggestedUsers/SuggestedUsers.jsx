import { VStack, Box, Flex, Text } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedUsers() {
    const suggestedUsers = [
        {
            id: 1, name: "suggest-1", followers: 1000, avatar: "./img3.png"
        },
        {
            id: 2, name: "suggest-2", followers: 0, avatar: "./img2.png"
        },
    ]
    return (
        <VStack py={8} px={6} gap={4}
            display={{ base: "none", md: "block" }}
        >
            <SuggestedHeader />
            {suggestedUsers.length !== 0 && (
                <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        Suggested for you
                    </Text>
                    <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                        See All
                    </Text>
                </Flex>
            )}

            {suggestedUsers.map((user) => (
                <SuggestedUser user={user} key={user.id} />
            ))}

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                © 2023 Built By{" "} T
            </Box>
        </VStack>
    )
}


