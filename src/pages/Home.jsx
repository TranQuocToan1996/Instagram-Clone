import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../components/FeedPosts/FeedPosts";

export default function Home() {
    return (
        <Container maxW={"container.lg"}>
            <Flex
                gap={20}
                borderRadius={6}
            >
                <Box flex={2} py={10}
                // border={"1px solid blue"}
                >
                    <FeedPosts />
                </Box>
                <Box flex={3} mr={10}
                    display={{ base: "none", lg: "block" }}
                    maxW={"300px"}
                // border={"1px solid red"}
                >
                    Suggestions
                </Box>
            </Flex>

        </Container>
    )
}
