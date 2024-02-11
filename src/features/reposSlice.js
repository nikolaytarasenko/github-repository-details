import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    repos: [],
    status: '',
    error: null,
    isLoading: false,
    perPage: 5,
    pages: 0,
    currentPage: 0,
    selectedRepo: null
}

export const fetchRepos = createAsyncThunk(
    'repos/fetchRepos',
    async function (userName, { rejectWithValue }) {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=500`)

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('User Not Found!')
                }

                throw new Error('Server Error!')
            }

            const data = await response.json()

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setPages = (state) => Math.ceil(state.repos.length / state.perPage)

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setPerPage: (state, action) => {
            state.perPage = Number(action.payload.perPage)
            state.pages = setPages(state)
            state.currentPage = 0
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload.currentPage
        },
        setSelectedRepo: (state, action) => {
            state.selectedRepo = action.payload.selectedRepo
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRepos.pending, (state) => {
            state.repos = []
            state.status = 'loading'
            state.error = null
        })

        builder.addCase(fetchRepos.fulfilled, (state, action) => {
            state.status = 'resolved'
            state.repos = action.payload
            state.pages = setPages(state)
            state.currentPage = 0
        })

        builder.addCase(fetchRepos.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
            state.pages = 0
        })
    }
})

export const { setPerPage, setCurrentPage, setSelectedRepo } = reposSlice.actions

export default reposSlice.reducer