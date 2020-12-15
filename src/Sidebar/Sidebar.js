import React from 'react'

import ListRender from './ListRender'  

function Sidebar(props) {

    function setActiveBrand(brand) { 
        props.context.setActiveBrand(brand)
        props.context.setActiveService([])
    }
    function setActiveService(service) { 
        props.context.setActiveService(service)
        props.context.setActiveBrand([])
    }
      
    return (
        <div className=' sticky-sidebar bg-white rounded border border-dark p-3'>
            <div className="d-flex flex-column link-container">
                <ListRender 
                    title='Бренды' 
                    preSlug='brand'
                    typeProdUrl={props.typeProdUrl}
                    typeProd={props.typeProd}
                    data={props.context.brands}
                    setActive={setActiveBrand}
                />
            </div> 
            <hr/>
            <div className="d-flex flex-column link-container">
                <ListRender 
                    title='Все услуги' 
                    preSlug='service'
                    typeProdUrl={props.typeProdUrl}
                    typeProd={props.typeProd}
                    data={props.context.services} 
                    setActive={setActiveService}
                />
            </div>
        </div>  
    )
}

export default Sidebar
