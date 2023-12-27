import { Box, Flex, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import GoogleAuth from './GoogleAuth'

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
            <Box border={"1px solid gray"} borderRadius={"5px"} padding={5}>
                <VStack spacing={5}>
                    <Image src='./logo.png' h={24} alt='Instagram' cursor={"pointer"} />

                    {isLogin ? <Login /> : <SignUp />}

                    <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text color={"white"} mx={1}> OR </Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>

                    <GoogleAuth />
                </VStack>
            </Box>
            <Box border={"1px solid gray"} borderRadius={"5px"} padding={5}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                        {isLogin ? "Sign up" : "Log in"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
