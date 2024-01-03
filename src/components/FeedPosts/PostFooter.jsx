import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment"
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { useDisclosure } from "@chakra-ui/react";
import CommentModal from "../../components/Modals/CommentModal"

export default function PostFooter({ post, isProfilePage, creator }) {
    const { isLiked, likes, handleLikePost } = useLikePost(post)
    const [comment, setComment] = useState("")
    const { isCommenting, handlePostComment } = usePostComment()
    const authUser = useAuthStore(state => state.user)
    const commentRef = useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleSubmitComment = async () => {
        await handlePostComment(post.id, comment)
        setComment("")
    }
    if (!authUser) return null
    return (
        <Box mb={10} marginTop={"auto"}>
            <Flex alignItems={"center"} gap={4} w={"full"} mb={2} my={4}>
                <Box onClick={handleLikePost} cursor={"pointer"}>
                    {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>
                <Box cursor={"pointer"} onClick={() => commentRef.current.focus()}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontSize={"sm"} fontWeight={"600"}>{likes} likes</Text>
            {!isProfilePage && <>
                <Text fontSize={"sm"} fontWeight={"600"}>
                    {creator.username + " "}
                    <Text as={"span"} color={"gray"}>
                        {post.caption}
                    </Text>
                </Text>
                {post.comments.length && <Text fontSize={"sm"} fontWeight={"600"} color={"gray"}
                    cursor={"pointer"} onClick={onOpen}
                >View all {post.comments.length} comments</Text>
                }
                {isOpen && <CommentModal isOpen onClose={onClose} post={post} />}
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
