import React from 'react';
import {Link} from 'react-router-dom';


import './Card.css';

const Card = (props) => {
  
  return (
    <Link
            to={`/products/${props.id}`}
        >
          <li className="card" >
                <img src={props.img} alt="" />
                <div>{props.name}</div>
                <div>{props.price}сом</div>
                {/* <div>Описание: {props.descrip}</div> */}
      <button onClick={props.onAddBasket}></button>
          </li>
    </Link>
  );
};

export default Card;

