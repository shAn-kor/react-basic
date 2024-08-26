import {useState} from 'react';

function StateComponent() {
// useState 는 함수형 컴포넌트에서만 사용할 수 있는 hook
// 반환 배열, [0]번째 현재데이터, [1] 변경하는 세터 함수

  let result = useState('초기값');
  let data = result[0]; // data
  let setData = result[1]; // setter

  let [msg, setMsg] = useState('black');

  let enter = () => {
      // data = "값을 이렇게 바꾸면?"; // 값 직접 변경 허용 X
      setData("이렇게 값 변경");
  }
  
  return (
    <div>
      현재데이터 {data} <br/>
      값 변경하기 <button onClick={enter}>입장</button><br/>
      값 변경하기 <button onClick={() => setData("퇴장했습니다")}>퇴장</button><br/>

      <h3 style={{color:msg}}>{msg}</h3>
      <button onClick={() => setMsg('red')}>붉은색</button>
      <button onClick={() => setMsg('green')}>푸른색</button>
      <button onClick={() => setMsg('yellow')}>그 사이 3초 짧은 시간</button>
    </div>
  );
}
export default StateComponent;