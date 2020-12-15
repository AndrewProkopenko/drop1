import React from 'react'
import { NavLink } from 'react-router-dom';
import data from '../data/database.json'
 

function ListRender(props) {

    
    let [hiddenClass, setHiddenClass] = React.useState(true)

    const prefix = data.prefixes[`${props.typeProd}`] 
  
    function showFullList() { 
        setHiddenClass(!hiddenClass)
    } 

    function renderLinks() { 
        return props.data.map( (item, index) => ( 
            <li  key={index}
                className={hiddenClass ? 'hidden' : 'show' }
            >
                <NavLink 
                     to={ `/${props.typeProdUrl}/${props.preSlug}/${item.slug}-${prefix}`}
                     onClick={ ()=>{ props.setActive(item)} }
                > 
                {item.name}
             </NavLink>
            </li>
          
        ))
    }
    return (
        <div className="d-flex flex-column link-container ">
            { 
                props.title && 
                <p>
                    { props.title}
                </p>
            }
            <ul>
                {
                    renderLinks()
                } 
            </ul>

            <button className='btn btn-dark my-3' onClick={ showFullList }>
                Показать еще
            </button>

          
        </div>
                
    )
}

export default ListRender
