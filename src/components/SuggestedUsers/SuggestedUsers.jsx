import { Box } from "@chakra-ui/react";

export default function SuggestedUsers() {
    return (
        <Box flex={3} mr={10}
            display={{ base: "none", lg: "block" }}
            maxW={"300px"}
        // border={"1px solid red"}
        >
            Suggestions
        </Box>
    )
}


