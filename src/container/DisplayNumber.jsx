import DisplayNumber from "../component/DisplayNumber";
import { connect } from "react-redux";

// 상태를 props로 전달
function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    }
}
// connect 실행 -> 리턴된 함수를 다시 실행 -> 만들어진 값을 export (connect의 return값이 함수이기 때문)
// = connect : 아래의 wrapped 컴포넌트와 같은 역할
export default connect(mapReduxStateToReactProps)(DisplayNumber);

/*
import { useState } from "react";
import store from '../store';

// Redux(애플리케이션 종속) 작업은 container 컴포넌트가 실행
export default function() {
    const [number, setNumber] = useState(store.getState().number);

    store.subscribe(function(){
        setNumber(store.getState().number);
    });

    return (
        <DisplayNumber number={number} />
    )
}
*/