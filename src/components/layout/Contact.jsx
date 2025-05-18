import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import { Headline } from "../Reusable/Headline"
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaTwitter } from "react-icons/fa"
import { Info } from "../Reusable/Info"
import { Icon } from "../Reusable/Icon"



export const Contact = () => {


    return (<>

        <div className="container text-white ">
            <Headline text="Let's Connect" />

           <div className="container my-xxl-3">
             <div className="row">
                <div className="col-12 col-md-6">
                    <GetInTouch/>
                </div>
                <div className="col-12 col-md-6">
                    <Form />
                </div>
            </div>
           </div>

        </div>


    </>)
}










const Form = () => {

    return (<>

        <form className="d-flex flex-column border border-white p-4 boxShadow my-4" >
            <div className="row mb-3">
                <div className="col form-floating ">
                    <input type="text" className="form-control  " id="first" placeholder="First name" />
                    <label htmlFor="first" className="ps-4">First Name</label>
                </div>
                <div className="col form-floating">
                    <input type="text" className="form-control " id="last" placeholder="Last name" />
                    <label htmlFor="last" className="ps-4"> Last Name</label>
                </div>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="company" placeholder="company" />
                <label htmlFor="company">Company</label>
            </div>
{/* <select className="form-select mb-3 " aria-label="Default select example">
  <option selected>License Type</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select> */}
<button className="btn btn-outline-info ">Submit</button>
        </form>


    </>)
}




const GetInTouch = ()=>{


    return(<>
  <div className="my-4">
      <h1 className=" fw-semibold">Let's get in touch!</h1>
                        <p>Got questions about SoftSell ? Our team is here to help. Contact us for quick and friendly support.</p>


                        {/* Reusable Info Component for Phone and Email */}
                        <div className="">
                            <Info title={"Phone"} description={"+91 981139685."} icon={<BsFillTelephoneOutboundFill />} />
                            <Info title={"Email"} description={"hello@softshell.ai"} icon={<MdEmail />} />
                        </div>
                        {/* Social Media Connect Section */}
                        <h3>Connect With Us</h3>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3 my-3">
                            <Icon compo={<FaTwitter />} bg={"bg-icon"} />
                            <Icon compo={<FaLinkedin />} bg={"bg-icon"} />
                        </div>
  </div>

    </>)
}