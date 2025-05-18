import { motion } from "framer-motion";
import heroSection from "../../assets/images/heroSection.png";
import { useThemeStore } from "../../store/themeStore";

export const HeroComp = () => {
    const mode = useThemeStore((state) => state.mode);

    return (
        <div className="container theme-text">
            <div className="row">
                {/* Left Text Section */}
                <motion.div
                    className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex order-last order-md-first"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="ps-lg-5 d-flex flex-column gap-4 justify-content-center text-capitalize text-center text-md-start p-4 p-md-0 theme-text">
                        <h1>
                            software license <br /> <span>buy</span> and <span>sell</span> <br /> the smarter way
                        </h1>
                        <p>
                            SoftShell helps you resell or buy software <br />
                            license securely and quickly — no tech skills needed.
                        </p>

                        <div className="d-flex gap-md-4 justify-content-center justify-content-lg-start gap-5">
                            <button className="btn btn-info">Sell License</button>
                            <button className={`btn ${mode ? "btn-outline-dark" : "btn-outline-info"}`}>
                                Join Now
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image Section */}
                <motion.div
                    className="col-12 col-sm-12 col-md-6 col-lg-6 order-first order-md-last"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <figure>
                        <img className={`img-fluid w-auto ${mode ? "dropShadowDark" : "dropShadowGreen"} dropShadowGreen `} src={heroSection} alt="selling image" />
                    </figure>
                </motion.div>
            </div>
        </div>
    );
};
