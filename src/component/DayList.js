// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const days = useFetch("http://localhost:3001/days");
    /* const [days, setDays] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3001/days') // Promise가 반환 (*Promise란 비동기 처리에서 사용되는 객체로, promise가 상태를 관리하여 다른 코드가 비동기적으로 실행될 수 있도록 만드는 객체)
        .then(res => {
            return res.json(); // res : http 응답이므로 .json 메소드를 사용하여 json으로 반환 (Promise로 반환)
        })
        .then(data => {
            setDays(data); // 데이터를 받아와 setting
        })
    }, []) */

    if(days.length === 0) {
        return <h2>Loading...</h2>; // 느린 인터넷 환경에서 데이터를 가져오기 전 로딩화면 출력
    }

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>

            ))}
        </ul>
    )
}