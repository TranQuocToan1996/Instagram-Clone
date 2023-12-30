import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment"
import useAuthStore from "../../store/authStore";

export default function PostFooter({ post, username, isProfilePage }) {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(0)
    const [comment, setComment] = useState("")
    const { isCommenting, handlePostComment } = usePostComment()
    const authUser = useAuthStore(state => state.user)
    const commentRef = useRef(null)

    const handleLiked = () => {
        if (!liked) {
            setLiked(true)
            setLikes(likes => likes + 1)
        } else {
            setLiked(false)
            setLikes(likes => likes - 1)
        }
    }

    const handleSubmitComment = async () => {
        await handlePostComment(post.id, comment)
        setComment("")
    }
    if (!authUser) return null
    return (
        <Box mb={10} marginTop={"auto "}>
            <Flex alignItems={"center"} gap={4} w={"full"} mb={2} my={4}>
                <Box onClick={handleLiked} cursor={"pointer"}>
                    {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>
                <Box cursor={"pointer"} onClick={() => commentRef.current.focus()}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontSize={"sm"} fontWeight={"600"}>{likes} likes</Text>
            {!isProfilePage && <>
                <Text fontSize={"sm"} fontWeight={"600"}>
                    {username + " "}
                    <Text as={"span"} color={"gray"}>
                        Good!
                    </Text>
                </Text>
                <Text fontSize={"sm"} fontWeight={"600"} color={"gray"}
                    cursor={"pointer"}
                >View all 1,000 comments</Text>
            </>}
            <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
                <InputGroup>
                    <Input
                        variant={"flushed"}
                        placeholder={"Add a comment..."}
                        fontSize={14}
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        ref={commentRef}
                    />
                    <InputRightElement>
                        <Button
                            fontSize={14}
                            color={"blue.500"}
                            fontWeight={600}
                            cursor={"pointer"}
                            _hover={{ color: "white" }}
                            bg={"transparent"}
                            onClick={handleSubmitComment}
                            isLoading={isCommenting}
                        >
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex >
        </Box>
    )
}
