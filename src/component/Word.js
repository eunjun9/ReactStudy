import { useState } from "react"

export default function Word({word: w}) { // :변수명 = 새로운 변수명으로 할당 (내부에 중복되는 변수명이 있을 경우 사용)
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            })
        }).then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        })
    }

    function del() {
        if(window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : 'DELETE'
            }).then(res => {
                if(res.ok) {
                    setWord({id:0})
                }
            })
        }
    }

    if(word.id === 0) {
        return null; // 삭제버튼을 눌렀을 경우 삭제한 단어가 바로 사라지게 리로드
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone} /></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    )
}

/*
    Create - POST
    Read - GET
    Update - PUT
    Delete - DELETE
*/