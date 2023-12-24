import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function FeedPost(props) {
    const { username, avatar, img } = props.post
    return (
        <>
            <PostHeader username={username} avatar={avatar} />
            <Box my={2} overflow={"hidden"}>
                <Image src={img} alt="user's pic" borderRadius={4} />
            </Box>
            <PostFooter username={username} />
        </>
    )
}
