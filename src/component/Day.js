import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
// import Word from "./WordTs";

export default function Day() {
    const {day} = useParams(); // DayList에서 <Link> url로 보내는 param값 (useParams : 주소창 문자열 반환)
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
        <h2>Day {day}</h2>
        { words.length === 0 && <h2>Loading...</h2> }
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
        </>
    )
}