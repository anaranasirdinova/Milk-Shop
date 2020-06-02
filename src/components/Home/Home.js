import React, {Component} from 'react';

import './Home.css';

import Banner from './Banner';
import CarouselBox from "../Home/CarouselBox";


// json-server --watch ./db.json --port 8000


class Home extends Component {
    render() {
        return (
            <div className="home">
                <Banner />
                <CarouselBox />
            </div>
        );
    }
}

export default Home;