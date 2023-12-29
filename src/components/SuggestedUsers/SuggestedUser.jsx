import { Button, Flex, Text, Avatar, VStack } from "@chakra-ui/react"
import useAuthStore from "../../store/authStore"
import useFollowUser from "../../hooks/useFollowUser"

export default function SuggestedUser({ user, setUser }) {
    const { username, followers, profilePicURL, uid } = user
    const authUser = useAuthStore(state => state.user)
    const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(uid)
    const onFollowUser = async () => {
        await handleFollowUser()
        setUser({
            ...user,
            followers: isFollowing ?
                user.followers.filter((follower) => follower.uid !== authUser.uid) :
                [...user.followers, authUser]
        })
    }
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex gap={2} alignItems={"center"} my={2}>
                <Avatar src={profilePicURL} alt={"user's suggest pic"} size={"md"} name={username}></Avatar>
                <VStack spacing={2} alignItems={"flex-start"}>
                    <Text fontSize={12} fontWeight={"bold"}>
                        {username}
                    </Text>
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        {followers.length} followers
                    </Text>
                </VStack>
            </Flex>
            {uid !== authUser.uid && <Button color={"blue.400"}
                fontSize={13}
                bg={"transparent"}
                h={"max-content"}
                fontWeight={"medium"}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                onClick={onFollowUser}
                isLoading={isUpdating}
            >
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>}
        </Flex>
    )
}
