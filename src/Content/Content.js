import React from 'react'
import MetaTags from 'react-meta-tags';
import { useParams } from 'react-router-dom'

         


function Content(props) {  

    const {brandSlug, serviceSlug} = useParams()  

    let documentTitle = props.meta.title 
    let documentDesc = props.meta.description 

    let headingString = brandSlug ? props.context.activeBrand.name : props.context.activeService.name || ''
 
    // if(headingString) documentTitle += " " + headingString 
 
    React.useEffect( () => {  
        if(brandSlug) {
            props.context.brands.map( item => {
                if(item.slug === brandSlug) {
                    props.context.setActiveBrand(item)
                    props.context.setActiveService([])
                }
                return 0
            })
        }
        if(serviceSlug) {
            props.context.services.map( item => {
                if(item.slug === serviceSlug) {
                    props.context.setActiveService(item)
                    props.context.setActiveBrand([])
                }
                return 0
            })
        }
        if(!brandSlug && !serviceSlug) { 
            props.context.setActiveService([])
            props.context.setActiveBrand([])
        } 
    }, [] )  
    
    function createMeta() {  
        if(brandSlug) { 
            documentTitle = documentTitle.replace('{{macros}}', headingString)
            documentDesc = documentDesc.replace('{{macros}}', headingString) 
        }
        if(serviceSlug) { 
            documentTitle = documentTitle.replace('{{macros}}', ' - ' + headingString)
            documentDesc = documentDesc.replace('{{macros}}', ' - ' + headingString) 
        }
        if(!serviceSlug && !brandSlug) { 
            documentTitle = documentTitle.replace('{{macros}}', '')
            documentDesc = documentDesc.replace('{{macros}}', '') 
        }
        props.createHeading(documentTitle)
    }

    function renderItems() {
        let newList = []
        props.context.companies.map( (item) => {  
            if(brandSlug) {
                item.brand.map( (brandId) => { 
                     if(brandId === props.context.activeBrand.id) { 
                        newList.push(item)
                     }
                     return 0
                })
            }
            if(serviceSlug) {
                item.brand.map( (serviceId) => { 
                     if(serviceId === props.context.activeService.id) { 
                        newList.push(item)
                     }
                     return 0
                })
            }  
            if(!(brandSlug || serviceSlug)) {
                newList.push(item)  
            }
            return 0
        })
        if(newList.length > 0) return newList.map( (item, index) => (
            <div key={index} className='border border-dark rounded bg-white p-3 mb-3'>
                <h4>
                    {item.name}
                </h4>
                <p>
                    {item.description}
                </p>
                <a href={`tel:${item.phone}`}> {item.phone} </a>
                {/* <img src={item.images[0]} alt="" /> */}
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        <table className='my-2 table table-sm table-bordered h6 '>
                            <thead >
                                <tr>
                                    <th className='px-3' scope="col">Услуга</th>
                                    <th className='px-3' scope="col">Цена</th> 
                                </tr> 
                            </thead>
                            <tbody>
                            { 
                                    item.price.map( (element, index) => (
                                        <tr key={index}>
                                            <td className='px-3'>{ element.name }</td>
                                            <td className='px-3'>{ element.price }</td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ))
        return  <div className='empty-container '>
             <h5>По запросу - <b>{headingString}</b> ничего не найдено. </h5> 
            <span></span> 
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
              
            <p></p>  
        </div>         
    }

    return (
        
        <div>
            {createMeta()}
            <MetaTags>
                <title>{documentTitle}</title>
                <meta name="description" content={documentDesc} /> 
            </MetaTags>
            {/* bg-white border border-primary p-3 */}
            <div className=''> 
    
                {
                    renderItems()
                }
            
            </div>
        </div>
    )
}

export default Content
