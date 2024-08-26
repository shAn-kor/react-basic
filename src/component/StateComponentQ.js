import { Fragment } from "react"
import { useState } from "react";

const StateComponentQ = () => {
    let [num, setNum] = useState(0);

    return (
      <Fragment>
      <h3>실습</h3>
      <h3>카운트:{num}</h3>
      <button onClick={(prev) => setNum(prev + 1)}>증가</button> {/* prev는 state의 이전값을 받을 수 있다. */}
      <button onClick={() => setNum(num - 1)}>감소</button>
      <button onClick={() => setNum(0)}>초기화</button>
      </Fragment>
    );
}
export default StateComponentQ;