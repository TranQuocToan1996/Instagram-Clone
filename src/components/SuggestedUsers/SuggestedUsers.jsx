import { VStack, Box, Flex, Text, Spinner } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

export default function SuggestedUsers() {
    const { isLoading, suggestedUsers } = useGetSuggestedUsers()

    return (
        <VStack py={8} px={6} gap={4}
            display={{ base: "none", md: "block" }}
        >
            <SuggestedHeader />
            {suggestedUsers.length !== 0 && !isLoading && (
                <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        Suggested for you
                    </Text>
                    <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                        See All
                    </Text>
                </Flex>
            )}

            {isLoading ? <Spinner /> :
                suggestedUsers.map((user) => {
                    return (
                        <SuggestedUser user={user} key={user.id} setUser={() => { }} />
                    )
                })
            }

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                © 2023 Built By{" "} T
            </Box>
        </VStack>
    )
}


