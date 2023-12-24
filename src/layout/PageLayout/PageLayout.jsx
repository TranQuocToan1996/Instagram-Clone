import { Box, Flex } from "@chakra-ui/layout";
import SideBar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router";

export default function PageLayout({ children }) {
    const { pathname } = useLocation()
    const isShowSideBar = pathname !== '/auth'

    return (
        <Flex>
            {isShowSideBar && (
                <Box w={{ base: '70px', md: '240px' }}>
                    <SideBar />
                </Box>
            )}

            {/* Content right */}
            <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
                {children}
            </Box>
        </Flex>
    )
}
