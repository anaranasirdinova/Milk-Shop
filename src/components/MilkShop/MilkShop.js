import React, {Component} from 'react';
// import axios from './node_modules/axios';
import axios from 'axios';

import '../Catalog/Catalog.css';
import '../Footer/Footer.css';

import Home from "../Home/Home";
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import Basket from '../Basket/Basket';
import Catalog from '../Catalog/Catalog';
import API_URL from '../../helpers/url';

class MilkShop extends Component {
  state = {
    data: []
  }
  
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts =  async () => {
    const {data} = await axios({
      method: "GET",
      url: `${API_URL}/products`
    });
    
    this.setState({data})
  }
  
  checkPage = (currentItem) => this.props.page === undefined || this.props.page === currentItem;
  
  

  render() {
    return (
      <div className = "milk-shop">
        {this.checkPage("home") && <Home data={this.state.data}/>}
        {this.checkPage("catalog") && <Catalog data={this.state.data}/>}
        {this.checkPage("contacts") && <Contacts/>}
        {this.checkPage("about") && <About/>}
        {this.checkPage("basket") && <Basket/>}
      </div>
    );
  }
}

export default MilkShop;