import { Heading, Spinner, Container, Box } from '@chakra-ui/react'
import Form from './components/Form'
import ReposList from './components/ReposList'
import Pagination from './components/Pagination'
import DisplayUser from './components/DisplayUser'
import RepoDetails from './components/RepoDetails'
import { useSelector } from 'react-redux'

function App() {
	const { repos, error, status, perPage, currentPage } = useSelector(state => state.repos)

	const reposToDisplay = repos.slice(currentPage * perPage, (currentPage * perPage) + perPage)

	const displayRepoIndex = i => (currentPage * perPage) + 1 + i

	return (
		<Container maxW="1400px" mb="40px">
			<Heading as="h1" size="xl" my={10}>
				GitHub Repository Details
			</Heading>
			<Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start" justifyContent="space-between" gap="40px">
				<Box flex="1" display="flex" flexDirection="column" alignItems="flex-start">
					<Form />
					{error && <Heading as="h4" fontSize="md" mt={10}>{error}</Heading>}
					{status === 'loading' && <Spinner size='xl' mt={10} />}
					{reposToDisplay.length > 0 && <ReposList reposToDisplay={reposToDisplay} displayRepoIndex={displayRepoIndex} />}
					<Pagination />
				</Box>
				<Box flex="1">
					<DisplayUser />
					<RepoDetails />
				</Box>
			</Box>
		</Container>
	)
}

export default App
