import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    // function showName() {
    //     console.log('Mike');
    // }
    // function showAge(age) {
    //     console.log(age);
    // }
    // function showText(e) {
    //     console.log(e.target.value);
    // }

    const [name, setName] = useState("Mike");
    const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

    return (
        <div>
            {/* <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button onClick={() => {
                showAge(30);
            }}>Show age</button>
            <br />
            <input type="text" onChange={showText} />

            <hr /> */}

            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name={name} />
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike");
            }}>Change</button>
        </div>
    )
}