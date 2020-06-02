// import React, { Component } from 'react';

// import Card from './Card';


// function Catalog (props) {

//     const data = props.data;

//     return (
//         <div className="catalog">
//                 <ul className="products">
//                     {data.map(product => ( 
//                         <Card 
//                             key={product.id} 
//                             img={product.img}
//                             name={product.name}
//                             price={product.price}
//                             id={product.id}
//                             onClick={props.addBasket}
//                         />
//                     ))}
//                 </ul>
//         </div >
//     );
// }

// export default Catalog;













import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card'
import './Catalog.css'


class Catalog extends Component {
  state = {
    data: [{
      name: "",
      img: "",
      quantity: "",
      price: "",
      code: "",
      status: false
    }],
  }
  componentDidMount() {
    this.fetchProducts ()
  }

  fetchProducts =  async () => {
    const {data} = await axios({
        method: "GET",
        url: `http://localhost:8000/products`
    });

    this.setState({data})
  }
  addBasket = async (id) => {
    const {data} = await axios({
      method: "GET",
      url: `http://localhost:8000/products/${id}`
    });
    let basket = JSON.parse(localStorage.getItem("basket"));
    
    if(!basket){
      localStorage.setItem("basket",'[]');
      basket=[];
    };
    let isInBasket = basket.filter(item=>item === id);
    if(isInBasket.length!==0)return;
    basket.push(data); // вы здесь добавляете id, а нужно добавлять объект, т.е продукт
    localStorage.setItem("basket",JSON.stringify(basket));
  }
  render() {
    return (
      <div className="catalog">
        <ul className="products">
          {this.state.data.map (product => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
              id={product.id}
              onAddBasket={()=> this.addBasket(product.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Catalog;