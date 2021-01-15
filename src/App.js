import React from 'react';
import { Provider } from 'react-redux';
import './App';
import Container from './component/container';
import store from './redux/store';

const App =() =>{
  return(
   <>
   <Provider store={store}>
     <Container />
     </Provider>
   </>
  )
}

 export default App;