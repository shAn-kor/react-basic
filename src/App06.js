
import {Fragment} from 'react';
import HookEffect from './hook/HookEffect';
import HookRef from './hook/HookRef';
import HookReducer from './hook/HookReducer';
import HookReducer2 from './hook/HookReducer2';
import HookQ2 from './hook/HookQ2';

function App() {
  return (
    <Fragment>
      <HookEffect/>
      <hr/>
      <HookRef/>
      <hr/>
      <HookReducer/>
      <hr/>
      <HookReducer2/>
      <hr/>
      <HookQ2/>
    </Fragment>
  );
}


export default App;