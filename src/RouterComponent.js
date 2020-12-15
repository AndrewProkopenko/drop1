import React from 'react' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';   
import axios from "./libs/axios" 

import './assets/style/style.scss' ;

import Modal from './Modal/Modal'
  
import Header from './Components/Header'
import Footer from './Components/Footer'
 
import Home from './Components/Home' 

import SinglePageService from './Components/SinglePageService';
  
import ErrorPage from './Components/ErrorPage'  
  
import ScrollToTop from './ScrollToTop'


 
function RouterComponent() {  
    let [data, setData] = React.useState([])
    let [linksList, setLinksList] = React.useState([])
    let [homeList, setHomeList] = React.useState([])

    const [isLoaded, setIsLoaded] = React.useState(false)

    const [isShowModal, setIsShowModal] = React.useState(false)

       
    React.useEffect(  () => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await axios.get('/data/database.json')
            .then( (response) => {
                setData(response)
                setIsLoaded(true)
                setLinksList([
                    response['remont-kompyutepov'],
                    response['remont-noutbukov'],
                    response['remont-monitorov'],
                    response['nastrojka-po'],
                    response['contacts']
                ])
                setHomeList([
                    response['remont-kompyutepov'],
                    response['remont-noutbukov'],
                    response['remont-monitorov'],
                    response['nastrojka-po']
                ])
            })

    }

    const handleShowModal = () => {
        setIsShowModal(!isShowModal)
        document.body.classList.toggle('overflow-hidden')  
    }


 
    return (      
           <div className='d-flex flex-column h-100'>

                    {
                        !isLoaded &&
                        <h3 className="my-5 text-center" >Загрузка...</h3>
                    }
                    {
                        isShowModal &&
                        <Modal handleShowModal={handleShowModal} />
                    }
                    {
                        isLoaded &&
                        <Router basename="/drop1" > 
                    
                                <ScrollToTop/>
                                
                                <Header linksList={linksList} handleShowModal={handleShowModal} />
                                <Switch>
                                    <Route exact path='/' render={() => <Home linksList={homeList} handleShowModal={handleShowModal} data={data['main-list']} /> } />

                                    {
                                        linksList.map((item, index) => (
                                            <Route key={index} exact path={`/${item.slug}`} render={() => <SinglePageService handleShowModal={handleShowModal} linksList={linksList} data={item} /> } />
                                        ))
                                    }
                                    {
                                        linksList.map((item) => {
                                            return item['list-service-menu'] && item['list-service-menu'].length > 0 &&
                                                item['list-service-menu'].map( (innerItem, index) => { 
                                                    return <Route key={index} path={`/${item.slug}/${innerItem.slug}`} render={() => <SinglePageService handleShowModal={handleShowModal} breadInner={item} data={innerItem} /> }/>
                                                })
                                        })
                                    }
                                    {
                                        linksList.map((item) => {
                                            return item['list-brands-menu'] && item['list-brands-menu'].length > 0 &&
                                                item['list-brands-menu'].map( (innerItem, index) => { 
                                                    return <Route key={index} path={`/${item.slug}/${innerItem.slug}`} render={() => <SinglePageService handleShowModal={handleShowModal} breadInner={item} data={innerItem} /> }/>
                                                })
                                        })
                                    }
                                    
                                    <Route  path='*' component={ErrorPage} />

                                </Switch>
                                <Footer linksList={linksList} />
                        </Router>  
        
                    }
                    </div>  
      
    )
}

export default RouterComponent

