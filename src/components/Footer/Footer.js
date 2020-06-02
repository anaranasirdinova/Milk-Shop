import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrap">
                <div className="container">
                    <div className="footer__address">
                        <div className="footer__info">
                            <div className="info__address">
                                <h3>Информация о магазине</h3>
                                <ul>
                                    <li className="street"> ул.Исанова 105/3<br></br> Кыргызстан</li>
                                    <li className="phone">+996312312312</li>
                                    </ul>
                                    <ul>
                                    <div className="footer__logo"></div><li className="email">milk.kg</li>
                                </ul>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            <div className="footer__team">
                &copy; 2020 - made by Group №3
            </div>
        </div>
    );
}

export default Footer;