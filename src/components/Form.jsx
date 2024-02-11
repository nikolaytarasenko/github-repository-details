import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUserName } from '../features/userSlice'
import { fetchRepos } from '../features/reposSlice'
import { Heading, HStack, Input, Button } from '@chakra-ui/react'

const Form = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(addUserName({ userName: userName }))

        dispatch(fetchRepos(userName))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Heading as="h2" fontSize="18px" mb={3}>GitHub UserName:</Heading>
            <HStack spacing="20px">
                <Input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="search repos by username"
                />
                <Button type="submit" lineHeight="1">Search</Button>
            </HStack>
        </form>
    )
}

export default Form