import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Carousel from './node_modules/react-bootstrap/Carousel';
import milk1Img from "../../assets/milk1.jpg";
import milk2Img from "../../assets/milk2.jpg";
import milk3Img from "../../assets/milk3.jpg";
import milk4Img from "../../assets/milk4.jpg";
import milk5Img from "../../assets/milk5.jpg";
import CarouselCaption from 'react-bootstrap/CarouselCaption';
// import { CardImgOverlay } from 'react-bootstrap/Card';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ milk1Img }
                        alt="Milk1"
                    />
                    <CarouselCaption>
                        <h3>Наши коровы пасуться на чистом воздухе и питаются исключительно экологичной, витаминизированной травой в горах Тянь-Шаня</h3>
                    </CarouselCaption>
                </Carousel.Item> 
                
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ milk3Img }
                        alt="Milk3"
                    />
                    <CarouselCaption>
                        <h3>Наши молочные продукты полезны для иммунитета  и костей взрослого человека</h3>
                    </CarouselCaption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ milk5Img }
                        alt="Milk5"
                    />
                    <CarouselCaption>
                        <h3>Молоко состоит приблизительно на 86 % из воды и на 14 % из сухого вещества, которое в свою очередь делится на молочный жир, белок, молочный сахар и минеральные вещества. Богато молоко витаминами  А, D и группы В (В1, В2, В12), макро- и микроэлементами, такими как кальций, калий, фосфор, магний, натрий, железо, фтор, йод.</h3>
                    </CarouselCaption>
                </Carousel.Item>
               
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ milk4Img }
                        alt="Milk4"
                    />
                    <CarouselCaption>
                        <h3>Наши молочные продукты особенно полезны для роста и питания костей маленьких детей</h3>
                    </CarouselCaption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ milk2Img }
                        alt="Milk2"
                    />
                    <CarouselCaption>
                        <h3>Наши молочные продукты любят и употребляют даже животные</h3>
                    </CarouselCaption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

