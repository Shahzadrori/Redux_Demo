import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buycake } from '../redux/index'
const Container = (props) => {
    const [number, setNumber] = useState(1);
    const Inp = (eve) => {
        const num = eve.target.value;
        console.log(num)
        setNumber(num);
    }
    return (
        <>
            <div>
                <h1>Number of cake  </h1>
                <button onClick={()=>props.buycake(number)} >Bought {props.numcake
                } cake</button>
                <input type='text' value={number} onChange={Inp} />
            </div>
        </>
    )
}

const mapstatetoprops = (state) => {
    return {
        numcake: state.numcake
    }
}
const mapdispatchtoprops = (dispatch) => {
    return {
        buycake: (number) => {
             dispatch(buycake(number))
        }
    }
}

export default connect(mapstatetoprops, mapdispatchtoprops)(Container);