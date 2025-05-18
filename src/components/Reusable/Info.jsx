


import { Icon } from "./Icon";

export const Info = ({title,description, icon})=>{
    return(<>
    <div className="d-flex gap-3 flex-column flex-md-row justify-content-center justify-content-md-start ">
    <Icon compo={icon}/>
   <div className="">
   <p className=""> <strong>{title}</strong> <br /> {description} </p>
   
   </div>
    </div>
    </>)
}