import React from 'react' 
import { NavLink } from 'react-router-dom'
import MetaTags from 'react-meta-tags';
  
import hourIcon from '../assets/images/hour-icon.png'
import introImage from '../assets/images/intro-img.jpg'

function Home(props) { 
    
    const apiBase = process.env.REACT_APP_BASE_API_URL 

    const month = [
        " Января",
        " Февраля",
        " Марта",
        " Апреля",
        " Мая",
        " Июня",
        " Июля",
        " Августа",
        " Сентября",
        " Октября",
        " Ноября",
        " Декабря"
    ] 
    const current_date = new Date()
	const month_value = current_date.getMonth();

    function renderList() {
        return props.linksList.map( (item, index) =>   (
            <div  key={index} className=" col-sm-6 col-lg-3  pb-3" >
                <div className="box-top" >
                    <img src={`${apiBase}/images/${item.img}`} className="card-img-top mt-2 img-60" alt="..." style={{ width: 60, height: 60}}/>
                 
                        <NavLink to="/remont-noutbukov" className="title">
                            {item.title}
                        </NavLink>

                        <div className="links">
                            <ul className="list">
                                <ul className="list"> 
                                    {   
                                        item['list-service-menu'] && 
                                        item['list-service-menu'].map( (innerItem, index) => (
                                           <li key={index} >
                                                <NavLink to={`/${item.slug}/${innerItem.slug}`}>
                                                    { innerItem.title}
                                                </NavLink>
                                           </li>
                                        ))
                                    }
                                </ul>
                            </ul>
                        </div>
                        <h3 className="card-subtitle mb-2 text-muted d-flex flex-column">
                           
                        </h3>  
                </div>
            </div>
        ))
    }
    function renderAdv() {
        return  props.data.items.map( (item, index) =>   ( 
            <div  key={index} className="col-12 col-sm-6 col-lg-3" >
               <div className="card card_theme_2" href="#">
                    <div className="card__icon">
                        <img src={`${apiBase}/images/${item.img}`} className="card-img-top img-60" alt="..." style={{ width: 60, height: 60}}/>    
                    </div>
                    <div className="card__title">{item.title}</div>
                </div>

               
            </div>
        ))
    }
 
    return (
        <React.Fragment> 
        { 
            props.data && 
            <div className="site-container ">
                <MetaTags>
                    <title>{props.data.meta.title}</title> 
                    <meta name="description" content={props.data.meta.description} /> 
                </MetaTags>
                <main role="main" className="gry-bg home" >
                    <div className="intro" style={{backgroundImage: `url(${introImage})`}}>
                        <div className="container">
                            <div className="intro__content mb-5">
                                <h1 className="title view-heavy">Срочная компьютерная помощь на дому!</h1>
                                <p className="intro__text">
                                    До конца 
                                    <span id="monthis">
                                        { month[month_value] }
                                    </span> &nbsp; – &nbsp;  
                                    <span className="intro__discount"> cкидка  25% </span><br />при первом обращении!
                                </p>
                            </div>
                        </div>
                    </div>

                   <div className="offers features">
                        <div className="container">
                            <div className="offers__container">
                                <div className="features__row">
                                    <div className="offers__block features__item">
                                        <div className="features__icon-wrapper">
                                            <svg className="research features__icon"  viewBox="0 0 550 490">
                                                <g>
                                                    <g>
                                                        <path class="st0" d="M486.7,60H124c-17.7,0-32,14.3-32,32v256c0,17.7,14.3,32,32,32h128c5.9,0,10.7-4.8,10.7-10.7l0,0   c0-5.9-4.8-10.7-10.7-10.7H124c-5.9,0-10.7-4.8-10.7-10.7V92c0-5.9,4.8-10.7,10.7-10.7h362.7c5.9,0,10.7,4.8,10.7,10.7v181.3   c0,5.9,4.8,10.7,10.7,10.7l0,0c5.9,0,10.7-4.8,10.7-10.7V92C518.7,74.3,504.3,60,486.7,60z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect x="220" y="369.3" class="st0" width="21.3" height="64"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path class="st1" d="M473.6,305.8c-18-18-42.4-28.1-67.9-28.1c-53,0-96,43-96,96c0,53,43,96,96,96c25.4,0,49.9-10.1,67.8-28.1      C511.1,404,511.1,343.3,473.6,305.8z M405.7,452c-43.2,0-78.3-35.1-78.3-78.3c0-43.2,35.1-78.3,78.3-78.3      c20.8-0.1,40.7,8.2,55.4,23c14.7,14.7,22.9,34.6,22.9,55.4C484,416.9,449,452,405.7,452z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path class="st1" d="M467.4,435.2L467.4,435.2c3.4-3.4,9-3.5,12.5-0.1l75.8,73.9c3.5,3.4,3.6,9,0.2,12.5l-0.9,1      c-3.4,3.6-9.2,3.7-12.7,0.2l-74.8-74.8C463.9,444.3,463.9,438.7,467.4,435.2z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path class="st0" d="M209.3,422.7h64c5.9,0,10.7,4.8,10.7,10.7l0,0c0,5.9-4.8,10.7-10.7,10.7h-64c-5.9,0-10.7-4.8-10.7-10.7l0,0      C198.7,427.4,203.4,422.7,209.3,422.7z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path class="st2" d="M250.4,117.3c-17.7,0-32,14.3-32,32s14.3,32,32,32s32-14.3,32-32S268.1,117.3,250.4,117.3z M250.4,160      c-5.9,0-10.7-4.8-10.7-10.7c0-5.9,4.8-10.7,10.7-10.7c5.9,0,10.7,4.8,10.7,10.7C261.1,155.2,256.3,160,250.4,160z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path class="st2" d="M325.1,192c-17.7,0-32,14.3-32,32s14.3,32,32,32s32-14.3,32-32S342.8,192,325.1,192z M325.1,234.7      c-5.9,0-10.7-4.8-10.7-10.7c0-5.9,4.8-10.7,10.7-10.7c5.9,0,10.7,4.8,10.7,10.7C335.8,229.9,331,234.7,325.1,234.7z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect x="175.4" y="176" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -69.5783 205.3622)" class="st2" width="75.4" height="21.3"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect x="277.1" y="149" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -47.7416 258.135)" class="st2" width="21.3" height="75.4"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path class="st2" d="M399.8,117.3c-17.7,0-32,14.3-32,32s14.3,32,32,32s32-14.3,32-32C431.8,131.7,417.4,117.3,399.8,117.3z      M399.8,160c-5.9,0-10.7-4.8-10.7-10.7c0-5.9,4.8-10.7,10.7-10.7s10.7,4.8,10.7,10.7C410.4,155.2,405.7,160,399.8,160z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <rect x="324.7" y="176" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -25.8677 310.9639)" class="st2" width="75.4" height="21.3"/>
                                                    </g>
                                                </g>
	
                                            </svg>
                                        </div>
                                        <p className="offers__text">Выезд специалиста и диагностика всегда бесплатно</p>
                                    </div>
                                    <div className="offers__block features__item">
                                    <div className="features__icon-wrapper">
                                        <svg className="clock features__icon" viewBox="0 0 97.2 97.2">
                                            <g>
                                                <g>
                                                    <path d="M48.6,0C21.8,0,0,21.8,0,48.6s21.8,48.6,48.6,48.6s48.6-21.8,48.6-48.6S75.4,0,48.6,0z M48.6,88.9      C25.5,88.9,10,71.7,9.4,48.6C8.8,26.1,26.6,8.7,48.6,8.7c22.6,0,39.3,17.5,39.3,40.1C87.9,71.4,71.3,88.9,48.6,88.9z"/>
                                                    <path d="M73.9,47.1H52.1V20.8c0-2.2-1.8-4-4-4s-4,1.8-4,4v30.3c0,2.2,1.8,4,4,4h25.8c2.2,0,4-1.8,4-4S76.1,47.1,73.9,47.1z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <p className="offers__text">Выезжаем к Вам течении 15 минут после звонка.</p>
                                    </div>
                                    <div className="offers__block features__item">
                                        <div className="features__icon-wrapper">
                                            <img src={hourIcon} alt="img"/>
                                        </div>
                                         <p className="offers__text">Около 94% поломок устраняем в течение 1 часа на Дому.</p>
                                    </div>
                                    <div className="offers__block features__item">
                                    <div className="features__icon-wrapper">
                                        <svg className="dialog features__icon"  viewBox="0 0 267.4 246.2">
                                            <g>
                                                <path d="M253.8,16.5c-8.5-9.5-20.7-15-33.5-15H46.6C34,1.5,21.8,6.9,13.3,16.4C4.7,25.9,0.6,38.6,2,51.3l12.3,112.2     c2.5,22.8,21.7,40.1,44.7,40.1h75.7l35,35.6c3.8,3.8,8.8,5.9,14,5.9c1.9,0,3.9-0.3,5.8-0.9c7.1-2.2,12.2-7.9,13.5-15.3l4.6-25.4     c24.1-0.7,42.5-17,45.1-40.1l12.3-112.2C266.3,38.7,262.3,25.9,253.8,16.5z M246.1,49.2L246.1,49.2l-12.3,112.2     c-1.5,13.2-12.6,23.1-25.8,23.1h-8.4c-4.5,0-8.5,3.3-9.4,7.8l-6,33.2c-0.1,0.3-0.3,0.5-0.5,0.5c-0.1,0-0.4,0.1-0.6-0.1l-24-24.4     c3-2.4,3.9-6.1,3.3-9.2c-0.7-3.8-3.9-7.6-9.3-7.6H58.9c-13.2,0-24.3-9.9-25.8-23.1L20.9,49.2c-0.8-7.3,1.6-14.6,6.5-20.1     c4.9-5.5,11.9-8.6,19.3-8.6h173.6c7.4,0,14.5,3.1,19.4,8.6C244.5,34.6,246.9,41.9,246.1,49.2z"/>
                                                <path d="M87.9,93c-7.8,0-14.2,6.4-14.2,14.2c0,7.8,6.4,14.2,14.2,14.2c7.8,0,14.2-6.4,14.2-14.2C102,99.4,95.7,93,87.9,93z"/>
                                                <path d="M133.5,93c-7.8,0-14.2,6.4-14.2,14.2c0,7.8,6.4,14.2,14.2,14.2s14.2-6.4,14.2-14.2C147.7,99.4,141.3,93,133.5,93z"/>
                                                <path d="M179,93c-7.8,0-14.2,6.4-14.2,14.2c0,7.8,6.4,14.2,14.2,14.2s14.2-6.4,14.2-14.2C193.3,99.4,186.9,93,179,93z"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <p className="offers__text">Консультируем Вас по всем вопросам на месте.</p>
                                    </div>
                                </div>
                                <div className="features__row">
                                <div className="offers__block features__item">
                                <div className="features__icon-wrapper">
                                    <svg className="car features__icon" viewBox="0 0 560 338">
                                       
                                        <g>
                                            <g>
                                                <path class="st0" d="M485.6,138.4l-39.2-17.9l-34.6-55.2c-10-16-27.6-25.7-46.5-25.6H217.9c-17.1,0-33.3,7.9-43.7,21.5l-44.7,58.5      L55,140.1c-18.9,5.2-32,22.5-32,42.1v28.5c0,24.1,19.2,44,43.3,44h6.4c7.7,29.7,38,47.5,67.7,39.8c19.5-5.1,34.8-20.3,39.8-39.8      h168c7.7,29.7,38,47.5,67.7,39.8c19.5-5.1,34.8-20.3,39.8-39.8h12c24.1,0,43.3-19.9,43.3-44v-32.5      C511.1,161.1,501.1,145.5,485.6,138.4z M126.4,276.1c-19.6,0-35.5-15.9-35.5-35.5s15.9-35.5,35.5-35.5s35.5,15.9,35.5,35.5      C162,260.1,146.1,276,126.4,276.1z M401.9,276.1c-19.6,0-35.5-15.9-35.5-35.5s15.9-35.5,35.5-35.5s35.5,15.9,35.5,35.5      C437.5,260.1,421.6,276,401.9,276.1z M467.7,234.7h-10.6c-3.3-30.5-30.8-52.5-61.3-49.1c-25.9,2.8-46.3,23.3-49.1,49.1H181.6      c-3.3-30.5-30.8-52.5-61.3-49.1c-25.9,2.8-46.3,23.3-49.1,49.1h-5c-13.1,0-23.3-10.9-23.3-24v-28.5c-0.1-10.7,7-20,17.3-22.9      l77.9-21.3c2.1-0.6,4-1.8,5.3-3.6L190,73.3c6.7-8.6,17-13.6,27.9-13.6h147.4c12-0.1,23.3,6,29.6,16.2l36.2,57.8      c1,1.7,2.6,3,4.3,3.8l41.8,19.1c8.4,3.9,13.8,12.3,13.7,21.6v32.5h0.1C491,223.8,480.8,234.7,467.7,234.7z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className="offers__text">При необходимости сложных работ бесплатно доставим Вашу технику в Сервис-Центр и привезем обратно после ремонта</p>
                                </div>
                                <div className="offers__block features__item">
                                <div className="features__icon-wrapper">
                                    <svg className="diplom features__icon" viewBox="0 0 297 297">
                                        <g>
                                            <path d="M148.5,69.022H44.969c-5.775,0-10.458,4.683-10.458,10.458c0,5.774,4.683,10.457,10.458,10.457H148.5     c5.775,0,10.458-4.683,10.458-10.457C158.958,73.704,154.275,69.022,148.5,69.022z"/>
                                            <path d="M148.5,103.532H44.969c-5.775,0-10.458,4.682-10.458,10.457c0,5.775,4.683,10.458,10.458,10.458H148.5     c5.775,0,10.458-4.683,10.458-10.458C158.958,108.214,154.275,103.532,148.5,103.532z"/>
                                            <path d="M148.5,138.041H44.969c-5.775,0-10.458,4.683-10.458,10.458c0,5.775,4.683,10.458,10.458,10.458H148.5     c5.775,0,10.458-4.683,10.458-10.458C158.958,142.724,154.275,138.041,148.5,138.041z"/>
                                            <path d="M270.855,17.255H26.144C11.728,17.255,0,28.983,0,43.399v175.69c0,14.416,11.728,26.145,26.144,26.145h155.036v24.054     c0,3.857,2.123,7.4,5.522,9.22c3.401,1.823,7.529,1.62,10.735-0.518l20.083-13.388l20.082,13.388     c1.749,1.167,3.773,1.757,5.802,1.757c1.691,0,3.388-0.41,4.934-1.238c3.399-1.819,5.522-5.363,5.522-9.22v-24.054h16.994     c14.416,0,26.145-11.729,26.145-26.145V43.399C297,28.983,285.271,17.255,270.855,17.255z M217.521,193.59     c-15.281,0-27.714-12.487-27.714-27.835c0-15.347,12.433-27.834,27.714-27.834c15.281,0,27.713,12.487,27.713,27.834     C245.234,181.103,232.803,193.59,217.521,193.59z M223.322,243.329c-1.757-1.171-3.779-1.756-5.801-1.756     c-2.022,0-4.045,0.585-5.801,1.756l-9.625,6.416v-37.769c4.851,1.632,10.034,2.528,15.426,2.528c5.391,0,10.575-0.896,15.425-2.528     v37.769L223.322,243.329z M276.085,219.088c0,2.834-2.396,5.229-5.23,5.229h-16.994V198.1c7.637-8.612,12.288-19.94,12.288-32.345     c0-26.88-21.814-48.75-48.628-48.75c-26.814,0-48.629,21.87-48.629,48.75c0,12.404,4.651,23.732,12.288,32.345v26.217H26.144     c-2.834,0-5.229-2.395-5.229-5.229V43.399c0-2.834,2.395-5.229,5.229-5.229h244.711c2.834,0,5.23,2.395,5.23,5.229V219.088z"/>
                                        </g>
                                    </svg>
                                </div>
                                <p className="offers__text">Все наши мастера проверенные и дипломированные специалисты</p>
                                </div>
                                <div className="offers__block features__item">
                                <div className="features__icon-wrapper">
                                    <svg className="shield features__icon" viewBox="0 0 512 556">
                                        <g id="surface1">
                                            <path class="st0" d="M473.5,157.9l0-0.4c-0.2-4.9-0.4-10.1-0.5-15.9c-0.4-28.2-22.9-51.6-51.1-53.2C363.1,85.2,317.5,66,278.6,28     l-0.3-0.3c-12.7-11.6-31.8-11.6-44.5,0l-0.3,0.3C194.5,66,149,85.2,90.1,88.5C61.9,90,39.4,113.4,39,141.6     c-0.1,5.8-0.2,11-0.5,15.9l0,0.9c-1.1,60-2.6,134.7,22.4,202.5c13.7,37.3,34.6,69.7,61.9,96.3c31.1,30.3,71.8,54.4,121,71.6     c1.6,0.6,3.3,1,5,1.4c2.4,0.5,4.8,0.7,7.2,0.7c2.4,0,4.8-0.2,7.2-0.7c1.7-0.3,3.4-0.8,5-1.4c49.2-17.2,89.9-41.3,120.9-71.6     c27.3-26.7,48.1-59.1,61.9-96.4C476,292.9,474.6,218.1,473.5,157.9z M422.8,350.5c-26.4,71.5-80.2,120.6-164.5,150     c-0.3,0.1-0.6,0.2-1,0.3c-0.9,0.2-1.8,0.2-2.6,0c-0.3-0.1-0.6-0.2-0.9-0.3c-84.4-29.4-138.3-78.5-164.6-150     c-23-62.5-21.7-131.1-20.6-191.6l0-0.3c0.2-5.2,0.4-10.6,0.5-16.6c0.2-12.5,10.2-22.9,22.7-23.6c33.3-1.9,62.6-8.3,89.5-19.7     c26.9-11.4,50.7-27.4,72.9-49c1.1-1,2.6-1,3.7,0c22.2,21.6,46.1,37.6,72.9,49c26.9,11.4,56.2,17.8,89.5,19.7     c12.6,0.7,22.5,11.1,22.7,23.6c0.1,6,0.2,11.5,0.5,16.6C444.6,219.3,445.9,287.9,422.8,350.5z"/>
                                            <path class="st0" d="M256,147.4c-70.4,0-127.6,57.2-127.6,127.6c0,70.4,57.2,127.6,127.6,127.6c70.4,0,127.6-57.2,127.6-127.6     C383.6,204.7,326.4,147.4,256,147.4z M256,372.6c-53.8,0-97.6-43.8-97.6-97.6s43.8-97.6,97.6-97.6c53.8,0,97.6,43.8,97.6,97.6     S309.8,372.6,256,372.6z"/>
                                            <path class="st0" d="M292.7,235.4l-59.3,59.3l-16.1-16.1c-5.9-5.9-15.4-5.9-21.2,0c-5.9,5.9-5.9,15.4,0,21.2l26.7,26.7     c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4l69.9-69.9c5.9-5.9,5.9-15.4,0-21.2C308,229.5,298.5,229.5,292.7,235.4z"/>
                                        </g>
                                    </svg>
                                </div>
                                <p className="offers__text">Отвечаем за качество работы и даём гарантию до 3х лет на все работы!</p>
                                </div>
                            </div>
                            </div> 
                        </div>
                    </div>


                    <div className="container uslugi">
                        <div className='row heading-margin'>
                            {
                                renderList() 
                            } 
                        </div> 
                        <h2 className='text-center heading-margin'>
                            Наши преимущества
                        </h2>
                        <div className='row mt-3'>
                           
                            {
                                renderAdv() 
                            } 
                        </div>  
                        <div className="heading-margin" dangerouslySetInnerHTML={{__html:  props.data.content}}></div>
                    </div> 
                </main> 
            </div>
        }
        <span></span> 
        </React.Fragment>
    )
}

export default Home