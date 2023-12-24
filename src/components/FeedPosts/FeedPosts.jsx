import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

export default function FeedPosts() {
    return (
        <Container py={10} px={2} maxW={"container.sm"}>
            <FeedPost></FeedPost>
            <FeedPost></FeedPost>
            <FeedPost></FeedPost>
            <FeedPost></FeedPost>
        </Container>
    )
}
