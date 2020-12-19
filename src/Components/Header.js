import React from 'react'
import {NavLink} from 'react-router-dom';

import LogoFrame from '../_Frames/LogoFrame'
import ModalBtnFrame from '../_Frames/ModalBtnFrame'
import HeaderPhoneFrame from '../_Frames/HeaderPhoneFrame'
import HeaderMobileDateFrame from '../_Frames/HeaderMobileDateFrame'
 

function Header(props) {

    const list = props.linksList

    const [isOpen,
        setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  

    return (
        <header className="header header_theme_3">
            <div className="header__top">
                <div className="container header__container position-relative" style={{zIndex: 2}}>
                    
                    <LogoFrame/>

                    <div className="header__left">
                        <div className="header__phone">
                            <HeaderPhoneFrame/>
                        </div>
                        <div className="header__btn" onClick={props.handleShowModal}>
                            <ModalBtnFrame/>
                        </div>
                        {/* <div className="header__busket">
                            <svg className="icon icon_shopping-cart" role="img">
                                <use href={sprite + "#shopping-cart"}/>
                            </svg>
                            <span className="header__busket-name">корзина</span>
                            <span className="header__busket-count">1</span>
                        </div> */}
                        <div className="header__mobile-menu-trigger">
                            <div className="hamburger-btn js-btn-menu" role="button" onClick={handleClick}>
                                <div
                                    className={`hamburger hamburger--slider ${isOpen
                                    ? 'is-active'
                                    : ''}`}>
                                    <div className="hamburger-box">
                                        <div className="hamburger-inner"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__menu sura-header">
                <div className="container">
                    <nav className="main-menu main-menu_theme_3">
                        <ul className="main-menu__list">
                            {list.length > 0 && list.map((item, index) => {
                                return (
                                    <li key={index} className="main-menu__item">
                                        <NavLink className="main-menu__link font-weight-bold" to={`/${item.slug}`}>
                                            {item.title}
                                        </NavLink>
                                        {item['list-service-menu'] && item['list-service-menu'].length > 0 && <ul>
                                            {item['list-service-menu'].map((innerItem) => {
                                                return (
                                                    <li key={innerItem.id} className='nav-item'>
                                                        <NavLink
                                                            exact
                                                            to={`/${item.slug}/${innerItem.slug}`}
                                                            className="main-menu__link inner-link">
                                                            {innerItem.title}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
}
                                        </ul>
}
                                        {item['list-brands-menu'] && item['list-brands-menu'].length > 0 && <ul className='second-list'>
                                            {item['list-brands-menu'].map((innerItem) => {
                                                return (
                                                    <li key={innerItem.id} className="main-menu__item">
                                                        <NavLink
                                                            exact
                                                            to={`/${item.slug}/${innerItem.slug}`}
                                                            className="main-menu__link">
                                                            {innerItem.title}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
}
                                        </ul>
}

                                    </li>
                                )
                            })
}

                        </ul>
                    </nav>
                </div>
            </div>
            <div
                className={`header__menu-mobile ${isOpen ? 'show' : ''}`}>
                <div className="mobile-menu mobile-menu_theme_3">
                    <div className="container mobile-menu__container">
                        <nav className="main-menu main-menu_theme_3 mobile-menu__menu">
                            <ul className="main-menu__list">
                                {
                                list.length > 0 && list.map((item, index) => {
                                    return (
                                        <li key={index} className="main-menu__item">
                                            <NavLink className="main-menu__link" to={`/${item.slug}`} onClick={handleClick}>
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    )
                                })
                                } 
                            </ul>
                        </nav>
                        <div className="mobile-menu__time">
                           <HeaderMobileDateFrame/>
                        </div>
                        <div className="mobile-menu__phone">
                            <HeaderPhoneFrame/>
                        </div>
                        <div className="mobile-menu__btn" onClick={props.handleShowModal}> 
                              <ModalBtnFrame/>  
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header
