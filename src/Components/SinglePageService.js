import React from 'react'
import Breadcrumb from '../Breadcrumbs'

import MetaTags from 'react-meta-tags';
import { useLocation } from 'react-router';
 

function SinglePageService(props) { 

    const location = useLocation()

    React.useEffect(() => {
        createMapTag()
        setModalHandleBtn()
    },[location]);

    const setModalHandleBtn = () => {
        const modalLinks = document.querySelectorAll('.td__btn')
        const modalLinksCustom = document.querySelectorAll('.js-modal-btn')

        modalLinks.forEach( (item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                props.handleShowModal()
            })
        })
        modalLinksCustom.forEach( (item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                props.handleShowModal()
            })
        })
    }
    const createMapTag = () => {
        const script = document.createElement('script');
        const mapContainer = document.querySelector('#mapplace')
        const mapData = document.querySelector('#mapdata')

        if(mapContainer !== null) {
            if(mapContainer && mapData && mapContainer.childNodes.length === 0) {
                mapContainer.style.height = '100%'
                script.src = mapData.getAttribute('data-map-script')
                script.async = true;
                mapContainer.appendChild(script);
            }
        }

    }
    const content = props.data.content
    const meta = props.data.meta
    let breadcrumbsInner = props.breadInner || {}

     
    let breadcrumbs = [
        {
            name: 'Главная',
            slug: ''
        } 
    ]
    if(breadcrumbsInner.hasOwnProperty('title')) {
        breadcrumbs.push({
            name: breadcrumbsInner.title,
            slug: breadcrumbsInner.slug,
        })
    }

    // Последняя неактивная крошка 
    breadcrumbs.push({
        name: props.data.title,
        slug: props.data.slug, 
        lastChild: true
    })
      
    return (
        <React.Fragment> 
            <MetaTags>
                <title>{meta.title}</title> 
                <meta name="description" content={meta.description} /> 
            </MetaTags>
 
            <Breadcrumb items={breadcrumbs} /> 
           
            <main role="main" className=" gry-bg">
                <div className="container-fluid" dangerouslySetInnerHTML={{__html: content}}></div>
            </main>
 
   
        </React.Fragment>
    )
}

export default SinglePageService
