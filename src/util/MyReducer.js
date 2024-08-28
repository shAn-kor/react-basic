// reducer  함수는 컴포넌트 외부에서 (상태값 받아서 state 체인지)
export const myReducer = (state, action) => { // state값, 액션 값
  console.log('state : ' + state);
  console.log(action);

  if (action === 'increase') {
    state = {value: state.value + 1};
  }

  if (action === 'decrease') {
    state = {value: state.value - 1};
  }
  
  if (action === 'reset') {
    state = {value: 0};
  }
  return state; // reducer 상태 값으로 다시 반환된다.
}
