import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../components/SuggestedUsers/SuggestedUsers";

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
                <SuggestedUsers />
            </Flex>

        </Container>
    )
}
