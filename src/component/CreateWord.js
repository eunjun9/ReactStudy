import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate(); // useHistory -> useNavigate로 변경 됨 (react-router-dom 6버전)
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if(!isLoading) { // loading이 false일때만 POST 요청 처리
            setIsLoading(true); // 요청을 처리중일 때 loading 상태로 변경 (한꺼번에 여러 요청이 들어오지 않게)

            fetch(`http://localhost:3001/words/`, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    day : dayRef.current.value, // current : 요소에 접근, value : input값
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false
                })
            }).then(res => {
                if(res.ok) {
                    alert("생성이 완료되었습니다.");
                    history(`/day/${dayRef.current.value}`);
                    setIsLoading(false); // 모든 작업이 완료되면 isLoading을 다시 false로 변경
                }
            })
        }
    }

    // useRef : DOM에 접근할 수 있게 하는 hook (스크롤 위치 확인, 포커스 등)
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    
    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={{opacity: isLoading ? 0.3 : 1}}>
                {isLoading ? "Saving..." : "저장"}
            </button>
        </form>
    )
}