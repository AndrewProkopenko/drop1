import React from 'react' 
import { NavLink } from 'react-router-dom'
import MetaTags from 'react-meta-tags';
  
function Home(props) { 
    
    const apiBase = process.env.REACT_APP_BASE_API_URL 

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
                <main role="main" className="gry-bg" >
                    <div className="container uslugi">
                        <div className='row mt-5 mb-5'>
                            {
                                renderList() 
                            } 
                        </div> 
                        <h2 className='text-center mt-5'>
                                Наши преимущества
                            </h2>
                        <div className='row mt-3'>
                           
                            {
                                renderAdv() 
                            } 
                        </div>  
                        <div className="mt-5" dangerouslySetInnerHTML={{__html:  props.data.content}}></div>
                    </div> 
                </main> 
            </div>
        }
        <span></span> 
        </React.Fragment>
    )
}

export default Home
