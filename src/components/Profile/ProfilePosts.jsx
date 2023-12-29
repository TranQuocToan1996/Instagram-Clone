import { Box, Grid, Skeleton, VStack, Center } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";

export default function ProfilePosts() {
    const { isLoading, posts } = useGetUserPosts()
    return (
        <Grid
            templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
            gap={1} columnGap={1}
        >
            {isLoading && [0, 1, 2].map((_, index) =>
                <VStack key={index}
                    alignItems={"flex-start"} gap={4}
                >
                    <Skeleton w={"full"}>
                        <Box h={"300px"}>
                            contents wrapped
                        </Box>
                    </Skeleton>
                </VStack>
            )}

            {!isLoading &&
                posts.map((post) => <ProfilePost key={post.id} post={post} />)
            }
            {!isLoading && posts.length === 0 &&
                <Center color={"red.400"}>No post found</Center>
            }

        </Grid>
    )
}
