import { Input, InputGroup, InputRightElement, Button, Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

export default function SignUp() {
    const [input, setInput] = useState({
        email: "",
        password: "",
        fullName: "",
        username: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const { loading, error, signup } = useSignUpWithEmailAndPassword()
    return (
        <>
            <Input
                placeholder='Email'
                fontSize={"14px"}
                type='email'
                size={"sm"}
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <Input
                placeholder='Fullname'
                fontSize={"14px"}
                type='text'
                size={"sm"}
                value={input.fullName}
                onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />
            <Input
                placeholder='Username'
                fontSize={"14px"}
                type='text'
                size={"sm"}
                value={input.username}
                onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
            <InputGroup>
                <Input
                    placeholder='Password'
                    fontSize={"14px"}
                    type={showPassword ? 'text' : 'password'}
                    value={input.password}
                    size={"sm"}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                />
                <InputRightElement h='full'>
                    <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>

            {error && (
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}

            {/* TODO: enter to submit */}
            <Button w={"full"}
                colorScheme='blue'
                size={"sm"}
                fontSize={"14px"}
                onClick={() => signup(input)}
                isLoading={loading}
            >
                Sign up
            </Button>
        </>
    )
}
