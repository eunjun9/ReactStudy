/* eslint-disable */
import { computeHeadingLevel } from '@testing-library/react';
import { useState } from 'react';
import './App.css';

function App() {

  let [titleList, setTitleList] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [title, setTitle] = useState(0);
  let [like, setLike] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState('');

  function firstPost() {
    let copy = [...titleList];
    copy[0] = '여자코트 추천';
    setTitleList(copy);
  }

  /*
  응용1. 글에 아무것도 입력안하고 발행버튼 누르는거 막으려면? 

  유저의 의도치않은 행동을 막는 코드도 많이 짜야 안전한 사이트가 됩니다. 

  
  응용2. 글을 하나 추가하면 따봉갯수 개별적용하던 것도 이상해질 수 있습니다.

  어떻게 해결하면 될까요? 

  아마 글이 하나 추가되면 따봉기록할 곳도 하나 더 만들어줘야할듯요.

  
  응용3. 날짜데이터는?

  state에 글만 저장되어있는데 날짜같은 것도 저장해두고 보여주는 식으로 하면 재밌을 것 같군요. 

  자바스크립트로 현재 날짜같은 것도 출력해볼 수 있어서 글 발행시 그런 기능을 더해줄 수도 있겠네요.  
  */
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>

      <button onClick={()=>{
        let copy = [...titleList];
        copy[0] = '여자코트 추천';
        setTitleList(copy);
      }}>첫글 변경</button> &nbsp;

      <button onClick={()=>{
        let tSort = [...titleList];
        tSort.sort();
        setTitleList(tSort);
      }}>가나다순 정렬</button>

      {
        titleList.map((title, i) => (
          <div className='list' key={i}>
            <h4 onClick={()=>{modal==false ? setModal(true) : setModal(false); setTitle(i);}}>
              {title} <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [...like];
                copy[i] = like[i]+1;
                setLike(copy);
              }}>👍</span> {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={()=>{
              let copy = [...titleList];
              copy.splice(i, 1); // splice(n, 1) : array에서 n번째 데이터 삭제
              setTitleList(copy);
            }}>삭제</button>
          </div>
        ))
      }
      <input onChange={(e)=>{
        setInput(e.target.value)
        console.log(input)
      }} />
      <button onClick={()=>{
        let copy = [...titleList];
        copy.unshift(input); // unshift : array 맨 앞에 데이터 추가
        setTitleList(copy);
      }}>글발행</button>

      {
        modal == true ? <Modal titleList={titleList} title={title} firstPost={firstPost} /> : null
      }
    </div>
  );

}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.titleList[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.firstPost}>글수정</button>
    </div>
  )
}

export default App;
