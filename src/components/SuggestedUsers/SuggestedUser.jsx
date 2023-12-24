import { Button, Flex, Text, Avatar, VStack } from "@chakra-ui/react"
import { useState } from "react"

export default function SuggestedUser(props) {
    const { name, followers, avatar } = props.user
    const [isFollower, setIsFollower] = useState(false)
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex gap={2} alignItems={"center"} my={2}>
                <Avatar src={avatar} alt={"user's suggest pic"} size={"md"} name={name}></Avatar>
                <VStack spacing={2} alignItems={"flex-start"}>
                    <Text fontSize={12} fontWeight={"bold"}>
                        {name}
                    </Text>
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        {followers} followers
                    </Text>
                </VStack>
            </Flex>
            <Button color={"blue.400"}
                fontSize={13}
                bg={"transparent"}
                h={"max-content"}
                fontWeight={"medium"}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                onClick={() => setIsFollower(!isFollower)}>
                {isFollower ? "Unfollow" : "Follow"}
            </Button>
        </Flex>
    )
}
