import { Box, Stack, Button, Select, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { setPerPage, setCurrentPage } from '../features/reposSlice'

const Pagination = () => {
    const { pages, perPage, currentPage } = useSelector(state => state.repos)
    const dispatch = useDispatch()

    const perPageList = [5, 10, 15, 20, 30]

    const handleChange = e => {
        dispatch(setPerPage({ perPage: e.target.value }))
    }

    const handlePageClick = page => {
        dispatch(setCurrentPage({ currentPage: page }))
    }

    return (
        <Box display="flex" flexDirection="column" gap="40px">
            <Stack direction="row" flexWrap="wrap" spacing={{ base: '2', md: '4' }} align="center">
                {pages > 0 && [...Array(pages)].map((_, index) => (
                    <Button
                        key={index}
                        colorScheme='teal'
                        variant={index === currentPage ? 'solid' : 'outline'}
                        onClick={() => handlePageClick(index)}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Stack>
            <Box alignSelf="flex-start">
                <Text as="p" display="inline-block" fontSize="md" mb={3}>per page:</Text>
                <Select value={perPage} onChange={handleChange}>
                    {perPageList.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </Select>
            </Box>
        </Box>
    )
}

export default Pagination