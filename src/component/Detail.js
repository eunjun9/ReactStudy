import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Detail(props) {

    let { id } = useParams();

    useEffect(()=>{
        setTimeout(() => {
            let alert = document.querySelector(".sale");
            alert.style.display = 'hidden';
        }, 2000);
    })

    return (
        <div className='row'>
            <div className='sale' style={{background:"yellow", padding:"20px"}}>2초이내 구매시 할인</div>
            <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${props.shoes[id].id+1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    )
}