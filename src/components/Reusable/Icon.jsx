


export const Icon = ({compo , bg})=>{

const handleClick = (e)=> e.preventDefault();

    return  <div>
        <a href="" onClick={(e)=>handleClick(e)} className={`${bg}  icon-color px-3 py-2    rounded-3 fs-5`}  >{compo}</a>
    </div>
}