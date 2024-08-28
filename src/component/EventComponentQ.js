import { useState } from "react";


function EventComponentQ() {
  let [form, setForm] = useState({inp : '', out : ''});

  let formHandler = (event) => {
    let copy = {...form, [event.target.name] : event.target.value};
    setForm(copy);
  }

  let change = () => {
    let copy = {...form, inp : '', out : form.inp};
    
    setForm(copy);
  }

  return (
    <div>
      <h3>인풋데이터 핸들링(실습)</h3>
      <input type="text" name="inp" value={form.inp} onChange={formHandler} />
      <button name="btn" onClick={change}>추가하기</button>
      <h3>결과</h3>
      <h5>{form.out}</h5>
    </div>
  );
}

export default EventComponentQ;