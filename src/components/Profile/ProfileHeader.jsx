import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile"
import useFollowUser from "../../hooks/useFollowUser";

export default function ProfileHeader() {
    const { userProfile } = useUserProfileStore()
    const authUser = useAuthStore((state) => state.user);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(userProfile.uid)

    const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
    const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;
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
                <Avatar alt="profile_user" src={userProfile.profilePicURL}></Avatar>
            </AvatarGroup>
            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex
                    gap={4}
                    direction={{ base: "column", sm: "row" }}
                    alignItems={"center"} w={"full"}
                    justifyContent={{ base: "center", sm: "flex-start" }}
                >
                    <Text fontSize={{ base: "sm", md: "lg" }}>{userProfile.username}</Text>
                    {visitingOwnProfileAndAuth && <Flex alignItems={"center"} alignContent={"center"} gap={4}>
                        <Button bg={"white"} color={"black"}
                            size={{ base: "xs", md: "sm" }} _hover={{ bg: "whiteAlpha.800" }}
                            onClick={onOpen}
                        >
                            Edit Profile
                        </Button>
                    </Flex>}
                    {visitingAnotherProfileAndAuth && <Flex alignItems={"center"} alignContent={"center"} gap={4}>
                        <Button bg={"blue.400"} color={"white"}
                            size={{ base: "xs", md: "sm" }} _hover={{ bg: "blue.600" }}
                            onClick={handleFollowUser} isLoading={isUpdating}
                        >
                            {!isFollowing ? "Follow" : "Unfollow"}
                        </Button>
                    </Flex>}
                </Flex>
                <Flex direction={"row"} gap={{ base: 2, sm: 4 }} alignItems={"center"} >
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} mr={1} fontWeight={"bold"}>{userProfile.posts.length}</Text>
                        Posts
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} mr={1} fontWeight={"bold"}>{userProfile.followers.length}</Text>
                        Followers
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} mr={1} fontWeight={"bold"}>{userProfile.following.length}</Text>
                        Following
                    </Text>
                </Flex>
                <Text gap={4} alignItems={"center"} fontSize={"sm"} fontWeight={"bold"}>
                    {userProfile.fullName}
                </Text>
                <Text gap={4} alignItems={"center"} fontSize={"sm"}>
                    {userProfile.bio}
                </Text>
            </VStack >
            {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
        </Flex >
    )
}
