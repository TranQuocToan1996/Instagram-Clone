import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

export default function FeedPost({ post }) {
    const { isLoading, userProfile } = useGetUserProfileById(post.createdBy)
    if (isLoading) return
    return (
        <>
            <PostHeader post={post} creator={userProfile} />
            <Box my={2} overflow={"hidden"}>
                <Image src={post.imageURL} alt="user's pic" borderRadius={4} />
            </Box>
            <PostFooter post={post} creator={userProfile} />
        </>
    )
}
