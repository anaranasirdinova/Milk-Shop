import React, { Component } from 'react'
import axios from 'axios'
import API_URL from '../../helpers/url'

import './Search.css'

class Search extends Component {
    state = {
        suggestions: [],
    }


    //Поиск по штрих-коду
    handleInputCode = (e) => {
        const value = e.target.value      

        if (value) {
            this.handleSearchProduct(value)
        } else {
            this.setState({ suggestions: [] })
        }
    }

    handleSearchProduct = async (value) => {
        const { data } = await axios({
            method: "GET",    
            url: `${API_URL}/products?code_like=${value}&_limit=5` 
        })

        this.setState({ suggestions: data }) 
    }


    //Поиск по наименовании
    onTextChange = (e) => {
        const searchValue = e.target.value      

        if (searchValue) {
            this.makeApiCall(searchValue)
        } else {
            this.setState({ suggestions: [] })
        }
    }

    makeApiCall = async (searchValue) => {
        const { data } = await axios({
            method: "GET",    
            url: `${API_URL}/products?name_like=${searchValue}&_limit=5` 
        })

        this.setState({ suggestions: data }) 
    }


    //Выводим список товаров 
    renderSuggestions = () => {
        const { suggestions } = this.state;

        if (suggestions.length === 0) {
            return null
        }

        return (
            <div className="autocomplete-items">
                {
                    suggestions.map((item, index) => (
                        <div className="item-main-block" key={index}>
                            <div className="image-block">
                                <img src={item.img} className="item-image"/> 
                            </div>
                            <div className="product-block">
                                <a className="item-link" href={`/products/${item.id}`}>{item.name} </a>
                                <br/>
                                Штрих-код: {item.code}
                                <br/>
                                Цена: {item.price}сом 
                            </div>
                        </div>
                    ))
                } 
                <div className="item-main-block">
                    <a href={`/catalog`}>Показать все товары</a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="header__search">
                <img class="search__btn" src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/17853935111558096454-512.png" alt=""></img>
                <input 
                    className="search__input"
                    placeholder="Введите название"
                    onChange={this.onTextChange}
                /> 
                {this.renderSuggestions()}

                <img class="barcode__btn" src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/884813891582962154-512.png" alt=""></img>
                <input
                    className="search__secondInput"
                    placeholder="штрих-код"
                    onChange={this.handleInputCode}
                />
                {this.renderSuggestions()}   
            </div>
        );
    };
};


export default Search;
