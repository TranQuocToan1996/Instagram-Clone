import { Input, Button } from "@chakra-ui/react"
import { useState } from "react"

export default function Login() {
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
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

            <Button w={"full"}
                colorScheme='blue'
                size={"sm"}
                fontSize={"14px"}
            >
                Log in
            </Button>
        </>
    )
}
