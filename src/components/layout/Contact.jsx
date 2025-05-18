import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { Headline } from "../Reusable/Headline";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Info } from "../Reusable/Info";
import { Icon } from "../Reusable/Icon";
import { useThemeStore } from "../../store/themeStore";
import { motion } from "framer-motion"; // animation wrapper

export const Contact = () => {
    return (
        <div className="container theme-text mt-5">
            <Headline text="Let's Connect" />
            <div className="container my-xxl-3">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <GetInTouch />
                    </div>
                    <div className="col-12 col-md-6">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Animated form section
const Form = () => {
    const mode = useThemeStore((state) => state.mode);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Form submission logic
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="d-flex flex-column border border-white p-4 boxShadow rounded-4 my-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="row mb-3">
                <div className="col-12 mb-3 col-md-6 form-floating">
                    <input type="text" className="form-control" id="first" placeholder="First name" required />
                    <label htmlFor="first" className="ps-4">First Name</label>
                </div>
                <div className="col-12  col-md-6 form-floating">
                    <input type="text" className="form-control" id="last" placeholder="Last name" required />
                    <label htmlFor="last" className="ps-4">Last Name</label>
                </div>
            </div>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="company" placeholder="Company" required />
                <label htmlFor="company">Company</label>
            </div>
            <div className="form-floating mb-3">
  <select
    className="form-select"
    id="license"
    defaultValue=""
    required
  >
    <option value="" disabled>Choose a license type</option>
    <option value="standard">Standard</option>
    <option value="enterprise">Enterprise</option>
    <option value="open-source">Open Source</option>
  </select>
  <label htmlFor="license">License Type</label>
</div>

<div className="form-floating mb-3">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{minHeight: "8rem"}} ></textarea>
  <label htmlFor="floatingTextarea">Message</label>
</div>
            {/* Submit button with theme-aware styling */}
            <button type="submit" className={`btn ${mode ? "btn-outline-dark" : "btn-outline-info"}`}>
                Submit
            </button>
        </motion.form>
    );
};

// Animated contact info section
const GetInTouch = () => {
    return (
        <motion.div
            className="my-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="fw-semibold">Let's get in touch!</h1>
            <p>Got questions about SoftSell? Our team is here to help. Contact us for quick and friendly support.</p>

            {/* Contact details */}
            <div>
                <Info title="Phone" description="+91 981139685." icon={<BsFillTelephoneOutboundFill />} />
                <Info title="Email" description="hello@softshell.ai" icon={<MdEmail />} />
            </div>

            {/* Social icons */}
            <h3>Connect With Us</h3>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 my-3">
                <Icon compo={<FaTwitter />} bg="bg-icon" />
                <Icon compo={<FaLinkedin />} bg="bg-icon" />
            </div>
        </motion.div>
    );
};
