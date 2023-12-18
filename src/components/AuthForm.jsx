import { Box, Flex, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { useNavigate } from 'react-router'

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true)
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate()
    const handleAuth = () => {
        if (!input.email || !input.password) {
            alert("Please input!")
            return
        }
        useNavigate("/")
    }
    return (
        <>
            <Box border={"1px solid gray"} borderRadius={"5px"} padding={5}>
                <VStack spacing={5}>
                    <Image src='./logo.png' h={24} alt='Instagram' cursor={"pointer"} />
                    <Input
                        placeholder='Email'
                        fontSize={"14px"}
                        type='email'
                        value={input.email}
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                    />
                    <Input
                        placeholder='Password'
                        fontSize={"14px"}
                        type='password'
                        value={input.password}
                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                    />
                    {!isLogin ? (
                        <Input
                            placeholder='Confirm password'
                            fontSize={"14px"}
                            type='password'
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                        />
                    ) : null}
                    <Button w={"full"}
                        colorScheme='blue'
                        size={"sm"}
                        fontSize={"14px"}
                        onClick={handleAuth}
                    >
                        {isLogin ? "Log in" : "Sign up"}
                    </Button>

                    <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text color={"white"} mx={1}> OR </Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>

                    <Flex justifyContent={"center"} alignItems={"center"} w={"full"}>
                        <Image src='./google.png' h={5} alt='Google' cursor={"pointer"} />
                        <Text mx={1} color={"blue.500"} cursor={"pointer"}>
                            {isLogin ? "Log in with Google" : "Sign up with Google"}
                        </Text>
                    </Flex>
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
