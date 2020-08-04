import React, {useReducer} from "react"
import AuthContext from './authContext'
import authReducer from './authReducer'
import clienteAxios from '../config/axios'
import {REGISTRO_EXITOSO,
    REGISTRO_ERROR} from '../types'

const AuthState = (props : any) => {

        const initialState = {
            //include token 
            authenticated : null,
            user : null,
            message : null,
            loading : true
        }

        const [state, dispatch] = useReducer(authReducer, initialState);

    // registrar usuario
    const registerUser = async (data : Object) => {
        try{
            const response = await clienteAxios.post('/v1/user', data) 
            console.log(response)
            dispatch({
                type : REGISTRO_EXITOSO,
                payload : response.data
            })

        }catch(error){
            console.log(error.response.data.msg)
        }
    }

    return (
        <AuthContext.Provider
            value = {{
                authenticated : state.authenticated,
                user : state.user,
                message : state.message,
                loading : state.loading,
                registerUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState