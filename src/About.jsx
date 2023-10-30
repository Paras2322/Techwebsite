import React from 'react'
import web from "./Images/img2.e981619f.svg"
import Common from './Common'

const About = () => {
    return (
        <>
            <Common
             name="Welcome to About page" 
            imgsrc={web} 
            visit="/contact"
             btn="Contact Now" />
        </>
    )
}

export default About;