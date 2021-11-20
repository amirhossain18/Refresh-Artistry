
import React from 'react'

import Amir from '../components/amir'
import { Announcement } from '../components/Announcement'
import Body from '../components/Body'
import Footer from '../components/Footer'

import { Navbarr } from '../components/Navbarr'









export default function Home() {
    return (
        <div>
            <Announcement/>
           <Navbarr/>
       
             <Amir/>
             <Body/> 

         
            

            <Footer></Footer>
        </div>
    )
}
