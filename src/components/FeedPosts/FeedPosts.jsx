import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box, Text } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts"



export default function FeedPosts() {
    const { isLoading, posts } = useGetFeedPosts()

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading &&
                [1, 2, 3].map((_, index) => (
                    <VStack key={"FeedPosts" + index} gap={4} alignItems={"flex-start"} mb={10}>
                        <Flex gap='2'>
                            <SkeletonCircle size='10' />
                            <VStack gap={2} alignItems={"flex-start"}>
                                <Skeleton height='10px' w={"200px"} />
                                <Skeleton height='10px' w={"200px"} />
                            </VStack>
                        </Flex>
                        <Skeleton w={"full"}>
                            <Box h={"400px"}>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))}

            {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
            {!isLoading && posts.length === 0 && (
                <>
                    <Text fontSize={"md"} color={"red.400"}>
                        Dayuum. Looks like you don&apos;t have any friends.
                    </Text>
                    <Text color={"red.400"}>Following some!!</Text>
                </>
            )}
        </Container>
    )
}
