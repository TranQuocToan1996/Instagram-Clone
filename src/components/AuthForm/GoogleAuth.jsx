import { Flex, Image, Text } from "@chakra-ui/react"

export default function GoogleAuth() {
    const isLogin = true
    return (
        <>
            <Flex justifyContent={"center"} alignItems={"center"} w={"full"}>
                <Image src='./google.png' h={5} alt='Google' cursor={"pointer"} />
                <Text mx={1} color={"blue.500"} cursor={"pointer"}>
                    {isLogin ? "Log in with Google" : "Sign up with Google"}
                </Text>
            </Flex>
        </>
    )
}
