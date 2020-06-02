import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../helpers/url';
import './Basket.css'

class Basket extends Component {

    state = {
        // code: '',
        data: [],
        codeProduct: {},
        name:'',
        phoneNumber:'',
        address:'',
        email:'',
        
    }

    componentDidMount(){
        this.fetchData();
        this.handleTotal();
    }

    fetchData = (id) =>{
        let data = JSON.parse(localStorage.getItem("basket"));
        // console.log(data) // из-за этого у вас здесь приходят просто цифры и ничего не отображается, кроме цифр там ничего не хранится
    
        if(!data) return
        
        data.map(item => item === id)
    
    
      this.setState({data})
    }


    handleTotal = () => {
        const arr = []
        this.state.data.map(item => arr.push(Number(item.price*item.quantity)))
        let sum = 0;
        if (arr.length) {
            sum = arr.reduce((a, b) => {
                return a + b
            });
        } else {
            sum = 0;
        }
        return sum;
    }

    handleDelete = (index) => {
        let data = JSON.parse(localStorage.getItem("basket"));
        console.log(data)
     
        data.splice(index, 1)
        localStorage.setItem("basket",JSON.stringify(data));
        this.fetchData();
       
    };

    handleInputVal = async (event, index, id, key) => {
        const value = event.target.value;

        const data = {...this.state.data};
        const item = data[index];

        item[key] = value;

        await axios.patch(`${API_URL}/basket/${id}`, item);
    
        await this.setState(data);
    }

    // handleInputCode = (e) => {
    //     this.setState({ code: e.target.value })
    //     console.log(this.state.code)
    // }

    handleInputName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleInputPhoneNumber = (e) => {
        this.setState({ phoneNumber: e.target.value })
    }

    handleInputAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    handleInputEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    // handleSearchProduct = async (e) => {
    //     e.preventDefault()
    //     if (!this.state.code) return
    //     const foundProduct= await axios.get(`${API_URL}/products`, {
    //         params: {
    //             q:this.state.code
    //         }
    //     })
    //     console.log(!this.state.codeProduct.length)
    //     this.setState({ codeProduct:foundProduct.data[0]}) 
    // }

    handleClick = async (e) => {
        e.preventDefault()
        if(!this.state.name || !this.state.phoneNumber || !this.state.address) return
        const data = {...this.state};
        
        await axios.post(`${API_URL}/orders/`, data)
        // this.handleClear();
        this.fetchData();
        this.setState({
            code: '',
            name:'',
            phoneNumber:'',
            address:'',
            email:''
            
        })
    }



    
    render() {
        // console.log(this.state.codeProduct.length)
        return (
            <div className="basket">
                {/* <h2 className="basket-heading">Корзина</h2> */}
            <>
                {this.state.data.length  ? (
                    <div className="basket-component">
                        <div className="table-wrapper">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Наименование</th>
                                        <th></th>
                                        <th>Количество</th>
                                        <th>Цена</th>
                                        <th>Сумма</th>
                                        <th>Штрих-код</th>
                                        <th>Удалить товар</th>
                                    </tr>
                                </thead>
                                
                                    {this.state.data.map((item, index) => (
                                        <tbody key={index}>
                                        <tr>
                                            <td>{item.name}</td>
                                            <td><img src={item.img} className="basket-item-img"/></td>
                                            <td>
                                                <input
                                                    className="input-quantity"
                                                    value={item.quantity}
                                                    multiple={false}
                                                    onChange={(event) => this.handleInputVal(event,index, item.id, 'quantity')}
                                                    type="number"
                                                />
                                            </td>
                                            <td>{item.price} с.</td>
                                            <td>{item.price*item.quantity} с. </td>
                                            <td>{item.code}</td>
                                            <td>
                                                <button className="basket-delete" onClick={() => this.handleDelete(index)}>удалить</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    ))}
                                    
                                    <tbody>
                                    <tr>
                                        <td><strong>Сумма к оплате:</strong></td>
                                        <td><strong>{this.handleTotal()} сом</strong></td>
                                    </tr>
                                    {/* {!this.state.codeProduct.length ? (
                                            <tr>
                                                <td>{this.state.codeProduct.name}</td>
                                                <td><img src={this.state.codeProduct.img} className="basket-item-img"/></td>
                                                <td>
                                                    <input
                                                        className="input-quantity"
                                                        value={this.state.codeProduct.quantity}
                                                        multiple={false}
                                                        onChange={(event) => this.handleInputVal(event, this.state.codeProduct.id, 'quantity')}
                                                        type="number"
                                                    />
                                                </td>
                                                <td>{this.state.codeProduct.price} с.</td>
                                                <td>{this.state.codeProduct.price*this.state.codeProduct.quantity} с. </td>
                                                <td>{this.state.codeProduct.code}</td>
                                                <td>
                                                    <button className="basket-delete" onClick={() => this.handleDelete(this.state.codeProduct.id)}>удалить</button>
                                                </td>
                                            </tr>
                                        ) : null} */}
                                </tbody>
                            </table>
                        </div>
                        <div>

                            {/* //поиск по штрих-коду
                                <form className="basket-form">
                                <label>Поиск по штрих-коду</label>
                                    
                                    <input value={this.state.code}
                                            onChange={(e) => this.handleInputCode(e)}
                                            type="number" 
                                    />
                                    <button onClick={(e) => this.handleSearchProduct(e)}>Поиск</button>
                                </form>  */}
                        
                                <form className="basket-forma">
                                    
                            
                            <h4>Оформление заказа</h4>
                            <div>
                                <label>Имя*</label>
                                <input
                                    value={this.state.name}
                                    onChange={(e) => this.handleInputName(e)}
                                />
                            </div>
                            <div>
                                <label>Адрес*</label>
                                <input
                                    value={this.state.address}
                                    onChange={(e) => this.handleInputAddress(e)}
                                    type="email"
                                />
                            </div>
                            <div>
                                <label>Телефон*</label>
                                <input
                                    value={this.state.phoneNumber}
                                    onChange={(e) => this.handleInputPhoneNumber(e)}
                                    type="number"
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    value={this.state.email}
                                    onChange={(e) => this.handleInputEmail(e)}
                                />
                            </div>
                            <button onClick={(e) => this.handleClick(e)}>отправить</button>
                        </form>
                      </div>
                    </div>
                ) : <div className="basket-component">
                        <h2>Ваша корзина пуста</h2>
                    </div>}
                </>
            </div>
        );
    }
}

export default Basket;