import { UnorderedList, ListItem, Text } from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedRepo } from '../features/reposSlice'

const ReposList = ({ reposToDisplay, displayRepoIndex }) => {
    const { selectedRepo } = useSelector(state => state.repos)
    const dispatch = useDispatch()

    const handleRepoClick = repo => {
        dispatch(setSelectedRepo({ selectedRepo: repo }))
    }

    return (
        <UnorderedList styleType="none" my={10}>
            {reposToDisplay.map((repo, i) => (
                <ListItem
                    key={repo.id}
                    _hover={{ cursor: 'pointer', background: '#f5f5f5' }}
                    onClick={() => handleRepoClick(repo)}
                    background={selectedRepo && selectedRepo.id === repo.id ? '#fdd1d1' : 'white'}
                >
                    <Text as="span" color="#2977c7">{`${displayRepoIndex(i)} -`}</Text> {repo.name}
                </ListItem>
            ))}
        </UnorderedList>
    )
}

export default ReposList