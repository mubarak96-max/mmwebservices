import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({img,styleClass,children}) => {
    return (
       <BackgroundImage className={styleClass} fluid={img}>
           <div className="background-overlay">
               <div className="background-content">
                   {children}
               </div>
           </div>
       </BackgroundImage>
    )
}


export default BackgroundSection
