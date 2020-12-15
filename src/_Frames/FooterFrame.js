


import React from 'react'

const frame = () => (
    <React.Fragment>
        <div className="col-lg-6">
            <div className="row align-items-center justify-content-center justify-content-sm-start">
                <div className="col-xl-6 col-lg-5 col-sm-6">
                    <a className="phone footer__phone" href="tel:+78007008000">
                        <span className="phone__number">8 800 700 8000</span>
                    </a>
                    <a className="phone footer__phone" href="tel:+78007008000">
                        <span className="phone__number">8 800 700 8000</span>
                    </a>
                </div>
                <div className="col-xl-6 col-lg-7 col-sm-6 footer__adress-wrapper">
                    <div className="footer__adress"> 
                        <svg className="icon icon_placeholder footer__adress-icon" role="img"  id="placeholder" viewBox="0 0 60 60">
                            <path d="M30 26c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7zm0-12c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"/><path d="M29.8 54.8l15.3-22.2c5.8-7.7 4.9-20.3-1.8-27C39.8 2 34.9 0 29.8 0s-9.9 2-13.6 5.6c-6.7 6.7-7.5 19.3-1.8 27l15.4 22.2zM17.7 7c3.2-3.2 7.6-5 12.1-5S38.7 3.8 42 7c6 6 6.8 17.4 1.6 24.4L29.8 51.2 16.1 31.4c-5.2-6.9-4.5-18.3 1.6-24.4z"/><path d="M42.1 43c-.5-.1-1 .3-1.1.9s.3 1 .9 1.1C52.4 46.2 58 49.6 58 51.5c0 2.7-10.7 6.5-28 6.5S2 54.2 2 51.5c0-1.9 5.6-5.3 16.1-6.5.5-.1.9-.6.9-1.1-.1-.5-.6-.9-1.1-.9C7.4 44.2 0 47.7 0 51.5 0 55.7 10.3 60 30 60s30-4.3 30-8.5c0-3.8-7.4-7.3-17.9-8.5z"/>
                        </svg> 
                        <span className="footer__adress-name">Здесь адрес</span>
                    </div>
                    <div className="footer__adress">
                        <svg  className="icon icon_clock footer__adress-icon" id="clock" viewBox="0 0 373 373">
                            <path d="M186.5 0C83.5 0 0 83.5 0 186.5S83.5 373 186.5 373 373 289.5 373 186.5C372.8 83.5 289.4.1 186.5 0zm8 356.6v-32.8c0-4.4-3.6-8-8-8s-8 3.6-8 8v32.8c-87.7-4.2-157.9-74.4-162.1-162.1h32.8c4.4 0 8-3.6 8-8s-3.6-8-8-8H16.4C20.6 90.8 90.8 20.6 178.5 16.4v32.8c0 4.4 3.6 8 8 8s8-3.6 8-8V16.4c87.7 4.2 157.9 74.4 162.1 162.1h-32.8c-4.4 0-8 3.6-8 8s3.6 8 8 8h32.9c-4.3 87.7-74.5 157.9-162.2 162.1z"/><path d="M270.9 260.9l-76.4-77.7v-80.7c0-4.4-3.6-8-8-8s-8 3.6-8 8v84c0 2.1.8 4.1 2.3 5.6l78.6 80c3.1 3.2 8.2 3.2 11.3.1s3.3-8.2.2-11.3z"/>
                        </svg>
                         <span className="footer__adress-name">Пн-Пт с 10.00 до 18.00, Сб-Вс выходной</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className="footer__logo-title">Ремонт компьютеров в СПб</div>
        </div>
    </React.Fragment>
)
export default frame