import React, { Component } from 'react';
import './Contact.css';

export default class Contacts extends Component {
    render() {
        return (
            <div className = "Information">
             <li>Наш адрес:</li>
            <p>город Бишкек, ул.Исанова 105/3</p>

            <ul className = "telephone-icons">
                <li>Контакты:
                    
                        <p>+996555555555 <a href="tel:+996555555555">
                            <img src="https://image.flaticon.com/icons/svg/1033/1033927.svg"/></a>
                            <a href="message:+996555555555">
                                <img src="https://image.flaticon.com/icons/svg/2052/2052763.svg"/></a>
                        </p>

                        <p>+996505555555 <a href="tel:+996505555555">
                            <img src="https://image.flaticon.com/icons/svg/1033/1033927.svg"/></a>
                            <a href="message:+996505555555">
                                <img src="https://image.flaticon.com/icons/svg/2052/2052763.svg"/></a>
                        </p>

                        <p>+996775555555  <a href="tel:+996775555555">
                            <img src="https://image.flaticon.com/icons/svg/1033/1033927.svg"/></a>
                            <a href="message:+996775555555">
                                <img src="https://image.flaticon.com/icons/svg/2052/2052763.svg"/></a>
                        </p>

                        <p>+996312312312  <a href="tel:+996312312312">
                            <img src="https://image.flaticon.com/icons/svg/684/684920.svg"/></a>
                        </p>

                </li>
            </ul>

            <ul className = "social-icons">
                    <li>
                        <a href="https://www.whatsapp.com">
                        <img src="https://image.flaticon.com/icons/svg/124/124034.svg"/></a>
                    </li>

                    <li>
                        <a href="http://www.viber.com">
                        <img src="https://www.flaticon.com/premium-icon/icons/svg/2504/2504948.svg"/></a>
                    </li>

                    <li>
                        <a href="https://telegram.org/">
                        <img src="https://image.flaticon.com/icons/svg/2111/2111646.svg"/></a>
                    </li>
            </ul>
         </div>   
        );
    }
}
     