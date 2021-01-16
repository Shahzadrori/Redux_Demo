import { BUY_CAKE } from "./type"

export const buycake =(number)=>{
    return {
        type : BUY_CAKE,
        payload : number
    }
}
