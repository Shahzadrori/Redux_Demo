import React from 'react';
import { connect } from 'react-redux';
import {buycake} from '../redux/index'
const Container =(props)=>{
    return(
        <>
            <div>
                <h1>Number of cake - {props.numcake} </h1>
                <button onClick={props.buycakeDispatch}>Buy cake</button>
            </div>
        </>
    )
}

const mapstatetoprops=(state)=>{
    return  {
      numcake:state.numcake
    }
}
const mapdispatchtoprops=(dispatch)=>{
    return{
        buycakeDispatch:()=>{
         dispatch(buycake())
        }
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Container);