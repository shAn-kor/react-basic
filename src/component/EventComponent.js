import { useState } from "react";


function EventComponent() {
  // let a = document.querySelector("input[name='name'");
  // console.log(a);

  // 1. 인풋이 관리할 값은 state로 선언
  // 2. input 태그에 value에 state 연결
  // 3. 이벤트 통해 input 값 제어
  let [name, setName] = useState('');
  let [topic, setTopic] = useState('');

  let handleName = (event) => {
    console.log('change');
    
    setName(event.target.value);
  }
  
  let handleTopic = (event) => {
    setTopic(event.target.value);
  }

  let handleClick = () => {
    alert(`${name} 님의 입력값 ${topic}`);
    setName('');
    setTopic('');
  }
  
  let handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  let [sel, setSel] = useState('피자');

  let handleSel = (event) => {
    setSel(event.target.value);
  }

  return (
    <div>
      이벤트 핸들링
      <input type="text" name="name" value={name} onChange={handleName}/>

      <input type="text" name="topic" value={topic} onChange={handleTopic} onKeyUp={handleKeyUp}/>
      <br/>

      <button type="button" onClick={handleClick}>클릭이벤트</button>


      <hr/>
      <h3>셀렉트 태그 핸들링(실습)</h3>
      <pre>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</pre>            

      <select onChange={handleSel}>
          <option>피자</option>
          <option>햄버거</option>
          <option>치킨</option>
      </select>

      <h3>선택한 결과</h3>
      <p>{sel}</p>
    </div>
  );
}

export default EventComponent;