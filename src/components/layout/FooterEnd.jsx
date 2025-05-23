import { FaLinkedin, FaTwitter } from "react-icons/fa"
import { Icon } from "../Reusable/Icon"






// Footer Section Component
export const FooterEnd = () => {


    return (<>
        {/* Footer Row with Links and Social Media Icons */}
        <div className="row py-2  mb-2 ">
            {/* Footer Left: Copyright */}
            <div className="col-12 col-md-12 col-lg-4 d-lg-inline-block d-flex justify-content-center theme-text">
                <p className="fw-bold ">
                    ©2025 SoftShell
                </p>
            </div>
            {/* Footer Center: Policy Links */}
            <div className="col-12 col-md-12 col-lg-6 d-lg-inline-block  d-flex justify-content-center">  
                <ul className=" list-unstyled d-flex flex-column flex-md-row  gap-4 text-center " onClick={(e) => e.preventDefault()}>
                <li className="nav-item"><a href="#" className="nav-link  text-theme">Privacy Policy</a></li>
                <li className="nav-item"><a href="#" className="nav-link  text-theme">Terms of Service</a></li>
                <li className="nav-item"><a href="#" className="nav-link  text-theme">Pricing Policy</a></li>
                <li className="nav-item"><a href="#" className="nav-link  text-theme">Editor Policy</a></li>
            </ul></div>
            {/* Footer Right: Social Media Icons */}
            <div className="d-flex justify-content-lg-end justify-content-center gap-3 col-12 col-md-12 col-lg-2">
                <Icon compo={<FaTwitter />} />
                <Icon compo={<FaLinkedin />} />
            </div>
        </div>

    </>)
}