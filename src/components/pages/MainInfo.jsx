import { Element } from "react-scroll"
import { CustomerReviews } from "../ui/CustomerReviews"
import { HowItWorks } from "../ui/HowItWorks"
import { WhyChooseUs } from "../ui/WhyChooseUs"



export const MainInfo = ()=>{

  return(
    <>
        <Element id="how-it-works" className="element" >    <HowItWorks/></Element>
        <Element id="why-choose-us" className="element" > <WhyChooseUs/></Element>
        <Element id="testimonials" className="element" ><CustomerReviews/></Element>

   
    
    </>
  )

}