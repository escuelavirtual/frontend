import {createContext} from "react"

const AuthContext = createContext({
    authenticated: false,
    login: () => {}
})

export default AuthContext
