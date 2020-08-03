import {createContext} from "react"

const AuthContext = createContext({
    authenticated: false,
    user: null
})

export default AuthContext
