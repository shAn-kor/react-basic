
import {Fragment} from 'react';
import './App.css';
import styled from './App.module.css';

function App() {
  return (
    <Fragment>
      <div className='app-title'>
        css 파일로 디자인
      </div>
      <div style={{color: 'blue', border: '1px solid #777'}}>
        직접 디자인
      </div>
      <div className={styled.appWrap}>
        <p className={styled.title}>모듈로 디자인</p>
        <p className='content'>글로벌디자인</p>
      </div>
    </Fragment>
  );
}


export default App;