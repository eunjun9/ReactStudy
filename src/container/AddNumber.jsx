import AddNumber from "../component/AddNumber";
import { connect } from "react-redux";

// 이벤트를 props로 전달
function mapDispatchToProps(dispatch) {
    return {
        onClick: function(size){
            dispatch({type:'INCREMENT', size:size}); // dispatch : 컴포넌트에서 state 수정요청 할 때 사용
        }
    }
}
export default connect(null, mapDispatchToProps)(AddNumber);

/*
import store from '../store';

// Redux(애플리케이션 종속) 작업은 container 컴포넌트가 실행
export default function() {
    return (
        <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size});
        }} />
    )
}
*/