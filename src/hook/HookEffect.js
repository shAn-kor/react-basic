import { useEffect, useState } from "react";


function HookEffect() {
  const [data, setData] = useState('');
  const [age, setAge] = useState('');

  // useEffect 훅 -> 컴포넌트 라이프사이클 관리
  // useEffect( () => {
    // console.log(' 마운트 이후 딱 한 번 실행 (네트워크로 값 받을 때');
  // }, []);

  // useEffect( () => {
  //   console.log(' 특정 값 변경되 렌더링 될 때 동작');
    
  // }, [data])

  // useEffect( () => {
  //   console.log('effect running');
  //   return () => {
  //     console.log('unmount(소멸) 되기 전에 실행');
      
  //   }
  // }, [data])

  // // useEffect 는 여러개 일 수 있다.
  // useEffect ( () => {
  //   console.log('effect 실행됨');
    
  // })

  // 무한루프 빠질 수 있는 코드
  // const [ex, setEx] = useState({name : '홍길동'});
  // useEffect ( () => {
  //   let copy = {...ex};
  //   setEx(copy);
  //   console.log(ex);
    
  // }, [ex]);

  return (
    <div>
      <input type="text" value={data} onChange={ (e) => setData(e.target.value)}/>
      <input type="text" value={age} onChange={ (e) => setAge(e.target.value)}/>
    </div>
  );
}

export default HookEffect;