import { useState } from "react";

function EventComponent2() {
  let [form, setForm] = useState({name : '', topic: ''});

  let handleForm = (e) => {
    let copy = {...form, [e.target.name] : e.target.value};
    console.log(copy);
    setForm(copy);
  }

  return (
    <div>
      input tag object 핸들링
      <input type="text" name="name" value={form.name} onChange={handleForm}/>

      <input type="text" name="topic" value={form.topic} onChange={handleForm}/>
      <br/>

      <button type="button">클릭이벤트</button>
    </div>
  );
}

export default EventComponent2;