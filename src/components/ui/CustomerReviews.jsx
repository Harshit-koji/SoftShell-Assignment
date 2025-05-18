import { motion } from "framer-motion"; // Framer Motion import
import carouselData from "../../services/carousel.json"
import { useThemeStore } from "../../store/themeStore";
import { Headline } from "../Reusable/Headline";
// ... other imports (unchanged)

export const CustomerReviews = () => {
  const mode = useThemeStore(state => state.mode);

  // Animation variants for card appearance
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
  };

  const textVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
  };

  return (
    <section className="container theme-text my-5">
<Headline text={"Testimonials"} />

      <div
        id="carouselExampleInterval"
        className={`carousel slide ${mode ? 'light-carousel' : 'dark-carousel'}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner py-5 px-5">
          {carouselData.map((curtElem) => {
            const { id, image, say, name, work } = curtElem;

            return (
              <div
                className={`carousel-item ${id === 1 ? "active" : ""}`}
                key={id}
                data-bs-interval="10000"
              >
                {/* Framer Motion animated card container */}
                <motion.div
                  className="container boxShadow"
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="row align-items-center justify-content-center text-center text-md-start py-5">

                    {/* Animated customer image */}
                    <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center">
                      <motion.figure
                        className="mb-0 text-center"
                        variants={imageVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <img
                          src={image}
                          alt="customer"
                          className="img-fluid rounded-circle w-50"
                        />
                      </motion.figure>
                    </div>

                    {/* Animated testimonial text */}
                    <div className="col-12 col-md-6">
                      <motion.div
                        className="px-3 px-md-4 theme-text"
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                      >
                        <p className="lead">{say}</p>
                        <h5 className="fw-bold mb-0 text-end">{name}</h5>
                        <p className="text-info text-end">{work}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          className="carousel-control-prev w-auto"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon text-info" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next w-auto"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
