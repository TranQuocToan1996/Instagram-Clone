import { Box, Flex } from "@chakra-ui/layout";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import { useLocation } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { Spinner } from "@chakra-ui/react";

export default function PageLayout({ children }) {
    const { pathname } = useLocation()
    const [user, loading] = useAuthState(auth)
    const isShowSideBar = pathname !== '/auth' && user
    const isShowNavBar = pathname !== '/auth' && !user

    if (loading) { return <PageLayoutSpinner /> }

    return (
        <Flex direction={isShowNavBar ? "column" : "row"}>
            {isShowSideBar && (
                <Box w={{ base: '70px', md: '240px' }}>
                    <SideBar />
                </Box>
            )}

            {isShowNavBar && <NavBar />}

            {/* Content right */}
            <Box flex={1} mx={"auto"} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
                {children}
            </Box>
        </Flex>
    )
}


const PageLayoutSpinner = () => {
    return (
        <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
            <Spinner size='xl' />
        </Flex>
    );
};