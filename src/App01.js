// import logo from './logo.svg';
// import './App.css';

import { Fragment } from "react";

/*
  필요한 파일들을 불러올 때 webpack loader 사용
  웹팩 로더는 직접 설치가 가능, 보일러플레이트로 만들 경우 자동 설정
  웹팩 로더 안에 babel이라는 도구가 es6 -> es5 로 다운그레이드
*/

function App() {
  let name = "홍길동";
  let age = 20;
  let j = "{ }"
  return (
    <Fragment>
    <h3>JSX 문법</h3>
    <ul>
      <li>1. JS파일은 JSX라고 부른다. (HTML 에 Javascript 파일 섞은 것), 주석 : alt shift a (주석은 중괄호 안에서 작성되야 한다.)</li>
      <li>2. JSX 는 반드시 하나의 태그를 return 해야한다.</li>
      <li>3. div를 이용해 묶어도 되고 Fragment 아니면 <></> 모형으로 묶어주면 된다.</li>
      <li>4. 변수값을 사용할 때는 {j}로 참조한다.</li>
      <li>5. if문 보다는 삼항연산식을 사용한다.</li>
      <li>6. 화면에 보여주고 싶은 문장이 없다면 null을 리턴하면 된다.</li>
      <li>7. undefined를 반환해도 되지만, 지양해야 한다.</li>
      <li>8. DOM 요소에 css를 직접 넣을 시 객체형으로 묶고 (중괄호 2개), 속성은 카멜표기법으로 사용된다.</li>
      <li>9. class 속성은 전부 className 으로 변경된다.</li>
      <li>10. 홀로 사용되는 태그는 반드시 / 로 닫는 태그 작성</li>
    </ul>

    <div className="example">
      클래스명 : example
    </div>

    <div style={{color:"red", backgroundColor : "yellow"}}>
      {age === 20 ? <h6>20입니다.</h6> : <h6>20 아닙니다.</h6>}
      {age === 21 ? <h6>20입니다.</h6> : null}
    </div>
    </Fragment>
  );
}

export default App;
