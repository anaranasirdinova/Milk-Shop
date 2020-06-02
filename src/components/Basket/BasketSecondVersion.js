import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../helpers/url';
import './Basket.css'

class Basket extends Component {

    state = {
        data: [],
        name:'',
        phoneNumber:'',
        address:'',
        email:''
    }

    componentDidMount(){
        this.fetchData();
        this.handleTotal();
    }

    fetchData =  async () => {
        const {data} = await axios({
            method: "GET",
            url: `${API_URL}/basket/`
        });

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

    handleDelete = async id => {
        await axios.delete(`${API_URL}/basket/${id}`);
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

    handleClick = async (e) => {
        e.preventDefault()
        if(!this.state.name || !this.state.phoneNumber || !this.state.address) return
        const data = {...this.state};
        
        await axios.post(`${API_URL}/orders/`, data)
        this.handleClear();
        this.fetchData();
        this.setState({
            name:'',
            phoneNumber:'',
            address:'',
            email:''
        })
    }

    render() {
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
                                        <tbody>
                                        <tr key={item.id}>
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
                                                <button className="basket-delete" onClick={() => this.handleDelete(item.id)}>удалить</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    ))}
                                    
                                    <tbody>
                                    <tr>
                                        <td><strong>Сумма к оплате:</strong></td>
                                        <td><strong>{this.handleTotal()} сом</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <form className="basket-form">
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
                ) : <div className="basket-component">
                        <h2>Ваша корзина пуста</h2>
                    </div>}
                </>
            </div>
        );
    }
}

export default Basket;