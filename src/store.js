import { createStore } from "redux";

// Redux로 공통으로 쓰이는 state들은 모두 여기서 수정
export default createStore(function(state, action){
    if(state === undefined) {
        return {number: 0}
    }
    if(action.type === 'INCREMENT') {
        console.log(state.number+", "+action.size)
        return {...state, number: state.number + action.size} // state 복제 후 거기서 추가 된 property값만 변형시키는 코드
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())