import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react";

export default function ProfileHeader() {
    return (
        <Flex
            gap={{ base: 4, sm: 10 }}
            py={10}
            direction={{ base: "column", sm: "row" }}
        >
            <AvatarGroup
                direction={{ base: "xl", md: "2xl" }}
                justifySelf={"center"}
                justifyContent={"flex-start"}
                mx={"auto"}
            >
                <Avatar name="profile_user" alt="profile_user" src="./img2.png"></Avatar>
            </AvatarGroup>
            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex
                    gap={4}
                    direction={{ base: "column", sm: "row" }}
                    alignItems={"center"} w={"full"}
                    justifyContent={{ base: "center", sm: "flex-start" }}
                >
                    <Text fontSize={{ base: "sm", md: "lg" }}>user_name</Text>
                    <Flex alignItems={"center"} alignContent={"center"} gap={4}>
                        <Button bg={"white"} color={"black"}
                            size={{ base: "xs", md: "sm" }} _hover={{ bg: "whiteAlpha.800" }}>
                            Edit Profile
                        </Button>
                    </Flex>
                </Flex>
                <Flex direction={"row"} gap={{ base: 2, sm: 4 }} alignItems={"center"} >
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} mr={1} fontWeight={"bold"}>4</Text>
                        Posts
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} mr={1} fontWeight={"bold"}>3</Text>
                        Followers
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} mr={1} fontWeight={"bold"}>2</Text>
                        Following
                    </Text>
                </Flex>
                <Text gap={4} alignItems={"center"} fontSize={"sm"} fontWeight={"bold"}>
                    Tr.Dom
                </Text>
                <Text gap={4} alignItems={"center"} fontSize={"sm"} fontWeight={"bold"}>
                    Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt consequuntur iure facere quam, animi accusamus quas ducimus ipsa tenetur quae qui doloremque. Tempore architecto cum doloribus ipsum distinctio voluptatem!
                </Text>
            </VStack >
        </Flex >
    )
}
