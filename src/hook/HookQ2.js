import { useReducer, useRef } from "react";


const q2Reducer = (state, action) => {
    let newState;
    if (action.type === 'text') {
        newState = {...state, todo: action.value}
    }

    else {
        newState = {...state, todo:'', list: action}
    }

    return newState;
}

const HookQ2 = () => {
    /*
    실습(할일목록 만들기 )
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.

    */
   const [state, actionFunc] = useReducer(q2Reducer, {todo: '', list: []});
   const input = useRef(null);
   
   let newList = state.list.map((data, index) => {return <li key={index}>{index + 1}. {data}</li>});

   let handleBtn = () => {
    let list = state.list;
    list.push(state.todo);
    
    actionFunc(list);
    input.current.focus();
   }

    return (
        <div>
            <input type="text" placeholder="할일 목록을 작성하세요" ref={input} value={state.todo} onChange={(e) => actionFunc(e.target)}/>
            <button type="button" onClick={(e) => handleBtn()}>등록</button>
            <ul>
				{newList}
            </ul>
        </div>
    )
}

export default HookQ2;