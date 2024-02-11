import { Box, Heading, Text, Tag, TagLabel } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const DisplayUser = () => {
    const userName = useSelector(state => state.user.userName)

    return (
        <Box mb={5}>
            <Heading as="h2" fontSize="18px" display="flex" alignItems="center" gap={5}>
                <Text as="span" fontWeight="bold">UserName:</Text>
                {userName ? (
                    <Tag
                        size="md"
                        variant="solid"
                        colorScheme="green"
                    >
                        <TagLabel>{userName}</TagLabel>
                    </Tag>
                ) : (
                    <Text as="span" fontWeight="400">...</Text>
                )}
            </Heading>
        </Box>
    )
}

export default DisplayUser