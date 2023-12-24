import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function FeedPost() {
    return (
        <>
            <PostHeader></PostHeader>
            <Box>
                <Image src="/img1.png" alt="user's pic" />
            </Box>
            <PostFooter></PostFooter>
        </>
    )
}
