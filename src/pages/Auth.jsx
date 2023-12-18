import { Container, Flex, Box, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import AuthForm from '../components/AuthForm'

export default function Auth() {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} padding={0}>
            <Container maxW={"container.md"}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                    <Box display={{ base: "none", md: "block" }}>
                        <Image src='./auth.png' h={650} alt='auth png' />
                    </Box>
                    <VStack spacing={4} align={"stretch"}>
                        <AuthForm />
                        <Box textAlign={"center"}>Get the App.</Box>
                        <Flex gap={5} justifyContent={"center"}>
                            <Image src='./playstore.png' h={10} alt='playstore png' />
                            <Image src='./microsoft.png' h={10} alt='microsoft png' />
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}
