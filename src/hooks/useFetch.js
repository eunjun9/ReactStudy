import { useEffect, useState } from "react";

// 중복되는 데이터 받아오는 부분을 url값만 받아 하나의 함수로 처리
export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [url]) // useEffect에서 ${param}같이 특정 값을 사용하면 의존성 배열이 비어있을 경우 값이 변경되어도 새로운 정보를 가져올 수 없음 -> 배열에 사용하는 값을 넣어주어야 함(최신 값 인식)

    return data;
}