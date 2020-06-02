import React, { Component } from 'react';
import axios from 'axios';

import './ProductInfo.css';

import API_URL from '../../helpers/url';



class ProductInfo extends Component {
    state = {
        data: {
          quantity: "1",
          status: false
        }
        
     
      }
      componentDidMount() {
        this.fetchProducts ()
        
      }
    
      fetchProducts =  async () => {
        const {data} = await axios({
            method: "GET",
            url: `${API_URL}/products/${this.props.match.params.id}`
        });

        this.setState({data})
    }

    addBasket = async (id) => {
        console.log(id)
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


    //   addBasket = async (index) => {
    //     const {data} = await axios.get(`${API_URL}/basket`);

    //     for (let item of data) {
    //         if (this.state.data.id === item.id) {
    //             alert('Этот товар уже добавлен в корзину!');
        //         return;
        //     }
        // }
        
    //     await axios.post(`${API_URL}/basket`, this.state.data);
    //     alert('Товар в корзине');
    //   }
    
      render() {
        
        const data = this.state.data;
        
        return (
            <div className="product-info">
                <div className="container">
                    <div className="product-info__wrap">
                        <div className="product-info__images">
                                <div className="product-info__image">
                                    <img 
                                    src={data.img}
                                    alt=""
                                    />
                                    </div>
                            
                        </div>
                        <div className="product-info__description">
                            <h2 className="product-info__title">{data.name} </h2>
                            <span className="product-info__code">Штрих-код: {data.code}</span>
                            <span className="product-info__price">Цена: {data.price}сом</span>
                            <p className="product-info__text">{data.description}</p>
                            <button 
                                onClick={() => this.addBasket(data.id)}
                                className="product-info__bin-btn"
                            >
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfo;