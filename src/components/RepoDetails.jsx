import { VStack, StackDivider, Box, Heading, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'

const RepoDetails = () => {
    const { selectedRepo } = useSelector(state => state.repos)

    const showCreatedAt = () => {
        const createdAt = new Date(selectedRepo.created_at)
        const date = createdAt.toLocaleDateString()
        const time = createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

        return `${date} at ${time}`
    }

    return (
        <div>
            <Heading as="h2" fontSize="18px" mb={3}>Repository Details:</Heading>
            {selectedRepo && (
                <VStack
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={2}
                    align='stretch'
                >
                    <Box bg="#deefec" borderRadius="10px" p={3}>
                        <Text fontWeight="bold">Name:</Text>
                        <Text>{selectedRepo.name}</Text>
                    </Box>
                    {selectedRepo.description && (
                        <Box bg="#deefec" borderRadius="10px" p={3}>
                            <Text fontWeight="bold">Description:</Text>
                            <Text>{selectedRepo.description}</Text>
                        </Box>
                    )}
                    <Box bg="#deefec" borderRadius="10px" p={3}>
                        <Text fontWeight="bold">Created:</Text>
                        <Text>{showCreatedAt()}</Text>
                    </Box>
                    <Box bg="#deefec" borderRadius="10px" p={3}>
                        <Text fontWeight="bold">Repository Link:</Text>
                        <Text>
                            <Link color="#2360e9" href={selectedRepo.html_url} target="_blank" display="flex" alignItems="center" gap="5px">
                                {selectedRepo.html_url} <ExternalLinkIcon mx='2px' />
                            </Link>
                        </Text>
                    </Box>
                    {selectedRepo.homepage && (
                        <Box bg="#deefec" borderRadius="10px" p={3}>
                            <Text fontWeight="bold">Project Link:</Text>
                            <Text>
                                <Link color="#2360e9" href={selectedRepo.homepage} target="_blank" display="flex" alignItems="center" gap="5px">
                                    {selectedRepo.homepage} <ExternalLinkIcon mx='2px' />
                                </Link>
                            </Text>
                        </Box>
                    )}
                    <Box bg="#deefec" borderRadius="10px" p={3}>
                        <Text fontWeight="bold">Stars:</Text>
                        <Text>{selectedRepo.stargazers_count}</Text>
                    </Box>
                    <Box bg="#deefec" borderRadius="10px" p={3}>
                        <Text fontWeight="bold">Forks:</Text>
                        <Text>{selectedRepo.forks_count}</Text>
                    </Box>
                </VStack>
            )}
        </div>
    )
}

export default RepoDetails