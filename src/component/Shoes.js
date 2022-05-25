import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from '../data';

export default function Shoes() {
    let [shoes] = useState(data);
    let navigate = useNavigate();

    return (
        <div className='row'>
            {
                shoes.map(shoe => (
                    <div className='col-md-4' key={shoe.id} onClick={()=>{ navigate(`/detail/${shoe.id}`) }}>
                        <img src={`https://codingapple1.github.io/shop/shoes${shoe.id+1}.jpg`} width="80%"/>
                        <h4>{shoe.title}</h4>
                        <p>{shoe.price}</p>
                    </div>
                ))
            }
        </div>
    )
}