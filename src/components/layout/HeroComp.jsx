
import heroSection from "../../assets/images/heroSection.png";



export const HeroComp = () => {


    return (
        <div className="container theme-text ">
            <div className="row   ">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex order-last order-md-first">
                    <div className="ps-lg-5 d-flex flex-column gap-4 justify-content-center   text-capitalize text-center text-md-start p-4 p-md-0 theme-text ">
                        <h1>software license <br /> <span>buy</span> and <span>sell</span> <br /> the smarter way</h1>

                        <p>SoftShell helps you resell or buy software <br />
                            license securely and quickly — no tech skills needed.</p>

                            <div className="d-flex gap-md-4 justify-content-center justify-content-lg-start gap-5 ">
                                <button className="btn btn-info  ">Sell License</button>
                                <button className="btn btn-info  ">Join Now</button>
                            </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-first order-md-last ">
           <figure>
            <img className="img-fluid w-auto  " src={heroSection} alt="selling image" />
           </figure>
                </div>
            </div>
        </div>

    )
}