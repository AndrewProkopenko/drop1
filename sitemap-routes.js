import React from 'react'
import { Route } from 'react-router-dom' 

import axios from "axios" 


const routes = () => {

    console.log('routes')

    let [data, setData] = React.useState([])
    let [linksList, setLinksList] = React.useState([])
    let [homeList, setHomeList] = React.useState([])
 
  
    React.useEffect(  () => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await axios.get('https://andrewprokopenko.github.io/drop1-admin/api/data/database.json')
            .then( (response) => {
                console.log(response)
                setData(response) 
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
    
    return (
        <Route>     
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
        </Route>
    )
};

export default routes