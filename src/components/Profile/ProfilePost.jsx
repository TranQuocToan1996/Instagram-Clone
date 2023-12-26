import {
    Flex, GridItem, Image, Text, useDisclosure, Modal, ModalOverlay,
    ModalContent, ModalCloseButton, ModalBody, Button, Avatar, Divider, VStack
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PostFooter from "../FeedPosts/PostFooter";
import Comment from "../Comment/Comment";

export default function ProfilePost({ img }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <GridItem
                cursor={"pointer"}
                borderRadius={4}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                overflow={"hidden"}
                position={"relative"}
                aspectRatio={1 / 1}
                onClick={onOpen}
            >
                <Flex
                    opacity={0}
                    _hover={{ opacity: 1 }}
                    position={"absolute"}
                    bg={"blackAlpha.700"}
                    zIndex={1}
                    transition={"all 0.3s ease"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"full"}
                    h={"full"}
                >
                    <Flex gap={50}>
                        <Flex>
                            <AiFillHeart size={20} />
                            <Text fontWeight={"bold"} ml={2}>7</Text>
                        </Flex>
                        <Flex >
                            <FaComment size={20} />
                            <Text fontWeight={"bold"} ml={2}>8</Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Image src={img} alt="user uploads" w={"100%"} h={"100%"} objectFit={"cover"}></Image>
            </GridItem >
            <Modal isOpen={isOpen}
                onClose={onClose}
                isCentered
                size={{ base: "3xl", md: "5xl" }}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody bg={"black"} pb={5}>
                        <Flex
                            gap='4'
                            w={{ base: "90%", sm: "70%", md: "full" }}
                            mx={"auto"}
                            maxH={"90vh"}
                            minH={"50vh"}
                        >
                            <Flex
                                borderRadius={4}
                                overflow={"hidden"}
                                border={"1px solid"}
                                borderColor={"whiteAlpha.300"}
                                flex={1.5}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Image src={img} alt='profile post' />
                            </Flex>
                            <Flex flex={1} flexDir={"column"} px={10} display={{ base: "none", md: "flex" }}
                            >
                                <Flex alignItems={"center"} justifyContent={"space-between"}>
                                    <Flex alignItems={"center"} gap={4}>
                                        <Avatar src={"/profilepic.png"} size={"sm"} name='As a Programmer' />
                                        <Text fontWeight={"bold"} fontSize={12}>
                                            {"post_owner"}
                                        </Text>
                                        {/* <Avatar src="/profilepic.png" size={"sm"} name="post_owner"></Avatar>
                                        <Text fontSize={12} fontWeight={"bold"}>post_owner</Text> */}
                                    </Flex>
                                    <Button
                                        size={"sm"}
                                        bg={"transparent"}
                                        _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                                        borderRadius={4}
                                        p={1}
                                    // onClick={handleDeletePost}
                                    // isLoading={isDeleting}
                                    >
                                        <MdDelete size={20} cursor='pointer' />
                                    </Button>
                                    {/* <Box borderRadius={4} p={1}
                                        _hover={{ bg: "whiteAlpha.300", color: "red.600" }}>
                                        <MdDelete cursor={"pointer"} size={20}></MdDelete>
                                    </Box> */}
                                </Flex>
                                <Divider my={4} bg={"gray.500"} />
                                <VStack w='full' alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                                    <Comment
                                        createdAt="1d ago"
                                        username="user_comment_1"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="4d ago"
                                        username="user_comment_2"
                                        profilePic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                    <Comment
                                        createdAt="3d ago"
                                        username="user_comment_2"
                                        profilepic="./profilepic.png"
                                        text="good!"
                                    ></Comment>
                                </VStack>
                                <Divider my={4} bg={"gray.800"} />
                                <PostFooter isProfilePage={true} />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
