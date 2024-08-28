import { useRef } from "react";


function HookRef() {
  let input = useRef(null);

  let handleClick = () => {
    console.log(input.current); // ref로 연결된 태그
    console.log(input.current.value);
    console.log(input.current.type);
    
    // value 값 자체 변경 대신 state로 관리되는 것이 좋다.
    
    
  }

  return(
    <div>
      <input type="text" ref={input}/>
      <button type="button" onClick={handleClick}>등록</button>
    </div>
  );
}

export default HookRef;