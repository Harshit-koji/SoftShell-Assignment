import { Element } from "react-scroll"
import { Contact } from "../layout/Contact"
import { FooterEnd } from "../layout/FooterEnd"






export const Footer =  ( ) =>{
    
    
    return(<>
        <Element id="contact" className="element" > <Contact/></Element>
   
    <FooterEnd/>
    </>)
}