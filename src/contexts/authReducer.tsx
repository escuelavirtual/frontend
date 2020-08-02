import { 
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR } from "../types";


export default (state : any, action : any) => {
    switch(action.type){

        case REGISTRO_EXITOSO:
            return {
                ...state,
                authenticated : true,
                message : null,
                loading : false
            }

      
        case REGISTRO_ERROR:
            return {
                ...state,
                authenticated : null,
                user : null,
                message : action.payload,
                loading : false
            }
        
        default:
            return state;
    }
}