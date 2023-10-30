import React from 'react'
import web from "./Images/hero-img.619f0cc8.png"
import Common from './Common'

const Home = () => {
    return (
        <>
            <Common 
            name="Grow your buisness with" 
            imgsrc={web} 
            visit="/Services"
             btn="Get Started " 
            />
        </>
    )
}

export default Home;