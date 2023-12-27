import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react"
import useLogin from "../../hook/useLogin"

export default function Login() {
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    const { loading, error, login } = useLogin()
    if (loading) {
        return <div>
            Loading
        </div>
    }

    return (
        <>
            <Input
                placeholder='Email'
                fontSize={"14px"}
                type='email'
                value={input.email}
                size={"sm"}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <Input
                placeholder='Password'
                fontSize={"14px"}
                type='password'
                value={input.password}
                size={"sm"}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
            />

            {
                error &&
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            }
            {/* TODO: enter to login */}
            <Button w={"full"}
                colorScheme='blue'
                size={"sm"}
                fontSize={"14px"}
                isLoading={loading}
                onClick={() => login(input)}
            >
                Log in
            </Button>
        </>
    )
}
