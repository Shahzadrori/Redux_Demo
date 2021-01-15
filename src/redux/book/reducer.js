import { foodstate } from "./state";
import { BUY_CAKE } from "./type";

export const foodreducer =(state=foodstate,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numcake : state.numcake - 1
            }
    
        default : return state;
    }

}