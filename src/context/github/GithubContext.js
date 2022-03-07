import { createContext,useReducer } from "react"
import githubReducer from "./GithubReducer"   

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return <GithubContext.Provider value={{
    ...state,
    dispatch,
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext

// on click clear results from state
// create a function in context that dispatches an action to reducer that clears users out of the state
// (it means we dispatch an action that makes users array empty)
// than bring the function to userSearch component from context
// and the function is called on clicking the 'clear' button