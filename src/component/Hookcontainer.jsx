import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {buycake} from  '../redux~'
const Hook=()=>{
    const numcake=useSelector(state=>state.numcake);
    const dispatch=useDispatch();
    return(
        <>
            <div>
                <h1>Books number {numcake}</h1>
                <button onClick={()=>dispatch(buycake())}>Want Some</button>
            </div>
        </>
    )
}

export default Hook;