import { Avatar, Button, Flex, Text, Alert, AlertIcon } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import { Link as RouteLink } from "react-router-dom";

export default function SuggestedHeader() {
    const { handleLogout, isLoggingOut, error } = useLogout()
    const authUser = useAuthStore(state => state.user)
    if (!authUser) return null
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Link to={`/${authUser.username}`} as={RouteLink}>
                    <Avatar src={authUser.profilePicURL || "./profilepic.png"} alt={"user's profile pic"} size={"lg"}></Avatar>
                </Link>
                <Link to={`/${authUser.username}`} as={RouteLink}>
                    <Text fontSize={12} fontWeight={"bold"}>
                        {authUser.username}
                    </Text>
                </Link>
            </Flex>
            {
                error &&
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            }
            <Button
                size={"xs"}
                background={"transparent"} _hover={"transparent"}
                alignItems={"center"} gap={2} fontSize={14} fontWeight={"medium"}
                cursor={"pointer"} color={"blue.400"}
                onClick={handleLogout}
                isLoading={isLoggingOut}
            >
                Logout
            </Button>
        </Flex>
    )
}
