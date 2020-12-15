import React from 'react'
import { NavLink } from 'react-router-dom'

import FooterFrame from '../_Frames/FooterFrame'

function Footer(props) {
    
    const list = props.linksList

    return (
        <footer className="footer footer_theme_2">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="row "> 
                        {/* justify-content-center */}
                            <div className="col-sm-6">
                                <nav className="main-menu main-menu_theme_4 footer__main-menu">
                                <ul className="main-menu__list">
                                {
                                    list.length > 0 &&
                                    list.map( (item, index) => {
                                        return (
                                            <li key={index} className="main-menu__item"> 
                                                <NavLink className="main-menu__link" to={`/${item.slug}`}>
                                                    {item.title} 
                                                </NavLink> 
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                                </nav>
                            </div>
                           
                        </div>
                    </div>
                   <FooterFrame/>
                </div>
                
            </div>
        </footer>

        

    )
}

export default Footer
