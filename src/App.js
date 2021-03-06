import React from 'react';
import { Provider } from 'react-redux';
import './App';
import Container from './component/container';
import Hook from './component/Hookcontainer';
import store from './redux/store';

const App =() =>{
  return(
   <>
   <Provider store={store}>
      {/* <Hook /> */}
      <Container />
     </Provider>
   </>
  )
}

 export default App;