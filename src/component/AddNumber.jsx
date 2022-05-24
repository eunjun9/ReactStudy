import { useState } from 'react';

// 기존 컴포넌트는 화면 표시에만 집중
export default function AddNumber(props) {
  let [size, setSize] = useState(1);

    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={function(){
          props.onClick(size);
        }}></input>
        <input type="text" value={size} onChange={function(e){
          setSize(Number(e.target.value));
        }}></input>
      </div>
    )
}