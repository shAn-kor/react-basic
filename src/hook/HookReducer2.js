import { useReducer } from "react";

const nameReducer = (state, action) => {
  
  state = {...state, [action.name]: action.value};
  
  
  return state;
}

function HookReducer2() {
  // name 과 age를 동시 처리가능한 nameReducer 함수 생성
  // 초기값 {name : '', age : 0}
  // 리듀서 함수 안에서 객체 값을 state = {...state, [key]: value};
  // action 함수는 매개변수를 값을 주면 된다.
  const [state, actionFunc] = useReducer(nameReducer, {name:'', age: 0});

  return (
    <>
      <input name="name" type="name" value={state.name} onChange={(e) => actionFunc(e.target)}/>
      <input name="age" type="age" value={state.age} onChange={(e) => actionFunc(e.target)} />
      리듀서를 통해 변경된 값: {state.name}, {state.age}
    </>
  );
}

export default HookReducer2;