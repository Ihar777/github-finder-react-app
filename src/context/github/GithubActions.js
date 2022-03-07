import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}`}
})

  // Get search results
  export const searchUsers = async (text) => {

    const params = new URLSearchParams({
      q: text
    })

    const response = await github.get(`/search/users?${params}`) // axios returns the response including json data (inner object called data) therefore no need to convert to json
    return response.data.items
  }

      // Get user and repos
      export const getUserAndRepos = async(login) => {
        const [user, repos] = await Promise.all([
          github.get(`/users/${login}`),
          github.get(`/users/${login}/repos`)
        ])

        return { user: user.data, repos: repos.data } // return an object with a user set to user.data and repos set to repos.data
      }
  
