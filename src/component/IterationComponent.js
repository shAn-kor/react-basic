

function IterationComponent() {
  const arr = [1,2,3,4,5];

  // const newArr = arr.map((value) => {return value * 10;})
  // console.log(newArr);
  
  // li는 리액트 엘리먼트 -> 반드시 고유한 key props 전달하도록 권고
  const newArr = arr.map((value, index) => {return <li key={index}>값: {value}</li>})

  return (
    <div>
      component iterator
      <ul>
        {newArr}
      </ul>
    </div>
  );
}

export default IterationComponent;