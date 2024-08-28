import { useReducer } from "react";
import {myReducer} from '../util/MyReducer';


function HookReducer() {
  // reduce hook
  // 반환 [state값, 리듀서 함수의 상태 바꿀 수 있는 action 함수]
  const [state, actionFunc] = useReducer(myReducer, {value: 0});

  const handleIncrease = () => {
    actionFunc("increase"); // myReducer 함수에 action으로 전달됨
  }

  return (
    <div>
      <h3>useReducder</h3>
      리듀서로 관리되는 state값: {state.value}
      <button type="button" onClick={handleIncrease}>증가</button>
      <button type="button" onClick={() => actionFunc('decrease')}>감소</button>
      <button type="button" onClick={() => actionFunc('reset')}>초기화</button>
    </div>
  );
}

export default HookReducer;