import { useState } from "react";


function IterationComponent2() {
// 기존 가짜데이터 -> 서버 데이터
  const data = [
    {id: 1, topic: 'hello world'},
    {id: 2, topic: 'bye'}
  ];
  let [list, setList] = useState(data);

  
  // 3. input tag state로 관리
  let [topic, setTopic] = useState('');
  
  // 4. button 클릭 시 input state 값을 배열에 추가
  let handleClick = () => {
    let obj = {id: list.length > 0 ? list[list.length-1].id + 1 : 0, topic: topic};
    console.log(obj);
    
    let newList = list.concat(obj);
    
    // state 업데이트
    setList(newList);
    setTopic('');
  }
  
  // 5. 삭제기능
  let handleRemove  = (id) => {
    // filter
    let newList = list.filter((value) => {
      return value.id !== id;
    });
    setList(newList);
  }
  
  // 2. 리스트 이용해 반복처리 - 이벤트가 태그보다 위에 위치
  const newList = list.map(value => <li key={value.id} onDoubleClick={() => {handleRemove(value.id)}}>{value.topic}</li>);

  return (
    <>
      <h3>간단한 할일 목록 만들기</h3>
      <ul>
        {newList}
      </ul>

      <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)}/>
      <button type="button" onClick={handleClick}>추가하기</button>
    </>
  );
}

export default IterationComponent2;