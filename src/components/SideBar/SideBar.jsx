import { Box, Flex, Link } from "@chakra-ui/layout";
import { Link as RouteLink } from "react-router-dom";
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constant"
import { Avatar, Button, Tooltip } from "@chakra-ui/react";
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hook/useLogout";


export default function SideBar() {
    const sideBarItems = [
        {
            id: 0,
            icon: <AiFillHome />,
            text: "Home",
            link: "/"
        },
        {
            id: 1,
            icon: <SearchLogo />,
            text: "Search",
            link: ""
        },
        {
            id: 2,
            icon: <NotificationsLogo />,
            text: "Notifications",
            link: ""
        },
        {
            id: 3,
            icon: <CreatePostLogo />,
            text: "Create",
            link: ""
        },
        {
            id: 4,
            icon: <Avatar size={"sm"} name="Test" src="/profilepic.png" />,
            text: "Profile",
            link: "/TODO"
        },
    ]
    const { handleLogout, isLoggingOut } = useLogout()
    return (
        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAnpha.300"}
            py={8}
            px={{ base: 2, md: 4 }}
            position={"sticky"}
            top={0}
            left={0}
        >

            <Flex direction={"column"} w={"full"} h={"full"} gap={10}>
                <Link to={"/"} as={RouteLink} pl={2} display={{ base: "none", md: "block" }} cursor={"pointer"}>
                    <InstagramLogo />
                </Link>
                <Link to={"/"} as={RouteLink} p={2} display={{ base: "block", md: "none" }}
                    _hover={{ bg: "whiteAlpha.300" }} borderRadius={6} w={{ base: 10 }}>
                    <InstagramMobileLogo />
                </Link>
                <Flex direction={"column"} gap={5} cursor={"pointer"}>
                    {sideBarItems.map((item) => (
                        <Tooltip
                            key={item.id}
                            hasArrow
                            label={item.text}
                            placement="right"
                            ml={1}
                            openDelay={500}
                            display={{ base: "block", md: "none" }}>
                            <Link
                                display={"flex"}
                                to={item.link || null}
                                as={RouteLink}
                                alignItems={"center"}
                                gap={4}
                                _hover={{ bg: "whiteAlpha.400" }}
                                borderRadius={6}
                                p={2}
                                w={{ base: 10, md: "full" }}
                                justifyContent={{ base: "center", md: "flex-start" }}
                            >
                                {item.icon}
                                <Box display={{ base: "none", md: "block" }}>
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>
                    ))}
                </Flex>


                {/* Logout */}
                <Tooltip
                    onClick={() => handleLogout()}
                    label={"Logout"}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{ base: "block", md: "none" }}
                >
                    <Flex
                        alignItems={"center"}
                        gap={4}
                        _hover={{ bg: "whiteAlpha.400" }}
                        borderRadius={6}
                        p={2}
                        w={{ base: 10, md: "full" }}
                        justifyContent={{ base: "center", md: "flex-start" }}
                        mt={"auto"}
                        onClick={handleLogout}
                        cursor={"pointer"}
                    >
                        <BiLogOut size={25} />
                        <Button
                            display={{ base: "none", md: "block" }}
                            variant={"ghost"}
                            _hover={{ bg: "transparent" }}
                            isLoading={isLoggingOut}
                        >
                            Logout
                        </Button>
                    </Flex>
                </Tooltip>
            </Flex>

        </Box>
    )
}
