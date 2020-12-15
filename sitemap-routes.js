import React from 'react'
import {Route} from 'react-router-dom'
import prefixes from './src/data/prefixes.json'

import laptopsBrands from './src/data/laptops/brands.json'
import laptopsServices from './src/data/laptops/services.json'

// import washersBrands from './src/data/washers/brands.json'
// import washersServices from './src/data/washers/services.json'

const laptopsPrefix = prefixes[0]['laptops'] 

export default (
    
    <Route>   
        {/* Маршруты со старого сайта , которых пока нет в проекте  */}
        <Route exact path='/o-nas' />
        <Route exact path='/garantiynoye-obsluzhivaniye' />
        <Route exact path='/nashi-vendory' />

        <Route exact path='/novosti' />
        <Route exact path='/otzyvy' />
        <Route exact path='/kontakty' />


        {/* Маршруты существующие в проекте   */}
        <Route exact path='/' />
 
        <Route exact path='/o-nas' />
 
        <Route exact path='/price' /> 
        <Route exact path='/uslugi' />

        <Route exact path='/uslugi/garantiynyy-remont'   />
        <Route exact path='/uslugi/remont-kompyuterov'   />
        <Route exact path='/uslugi/remont-istochnikov-bespereboynogo-pitaniya-i-stabilizatorov-napryazheniya'   />
        <Route exact path='/uslugi/remont-printerov-mfu-kopirov'   />
        <Route exact path='/uslugi/remont-planshetov-i-smartfonov'  />
        <Route exact path='/uslugi/platnyy-remont'   />


        <Route exact path={`/uslugi/remont-noutbukov/brand/`}></Route> 
        <Route exact path={`/uslugi/remont-noutbukov/service/`}></Route>  
        <Route exact path='/uslugi/remont-noutbukov'  />
        
        {
            laptopsBrands.map((item, index) => (
                <Route key={index} exact path={`/uslugi/remont-noutbukov/brand/${item.slug}-${laptopsPrefix}`}  />
            ))
        }
        {
            laptopsServices.map((item, index) => (
                <Route key={index} exact path={`/uslugi/remont-noutbukov/service/${item.slug}-${laptopsPrefix}`} />
            ))
        }
                            
        

       
           
        {/*
        {
            laptopsBrands.map((item, index) => (
                <Route key={index} exact path={`/${laptopsPrefix}laptops/brand/${item.slug}`} />
            ))
        }
        {
            laptopsServices.map((item, index) => (
                <Route key={index} exact path={`/${laptopsPrefix}laptops/service/${item.slug}`} />
            ))
        }
         <Route exact path={`/${laptopsPrefix}laptops`} />

        {
            washersBrands.map((item, index) => (
                <Route key={index} exact path={`/${washersPrefix}washers/brand/${item.slug}`} />
            ))
        }  
        {
            washersServices.map((item, index) => (
                <Route key={index} exact path={`/${washersPrefix}washers/service/${item.slug}`} />
            ))
        }    */}
         

        {/* <Route  path={`/${washersPrefix}washers`} />  */}
  
    </Route>
);