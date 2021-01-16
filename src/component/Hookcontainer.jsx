import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {buycake} from  '../redux';
const Hook=()=>{
    const numcake=useSelector(state=>state.numcake);
    const dispatch=useDispatch();
    return(
        <>
            <div>
                <h1>HOOK</h1>
                <h3>Books number {numcake}</h3>
                <button onClick={()=>dispatch(buycake())}>Want Some</button>
            </div>
        </>
    )
}

export default Hook;