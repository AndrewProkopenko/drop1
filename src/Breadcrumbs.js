import React from 'react'

import { Link} from 'react-router-dom'

function Breadcrumbs(props) {
    return (
        <div className='breadcrumb-bg'>
            <nav className='container'>
                <ol className='breadcrumb bg-none px-0'>
                    {
                        props.items.map( (item, index) => {
                            return <li key={index} className='breadcrumb-item'>
                                        {   !item.lastChild &&
                                            <Link to={`/${item.slug}`}>
                                                { item.name }
                                            </Link>
                                        }
                                        {   item.lastChild &&
                                            <span >
                                                { item.name }
                                            </span>
                                        }
                                    </li>   
                        })
                    } 
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs
