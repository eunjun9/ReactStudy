// 기존 컴포넌트는 화면 표시에만 집중
export default function DisplayNumber(props) {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={props.number} readOnly></input>
      </div>
    )
}