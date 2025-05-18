import { Headline } from "../Reusable/Headline";
import easyMoney from "../../assets/images/easyMoney.png";
import { motion } from "framer-motion";

// Animation variants for individual content blocks
const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Container variant for staggered children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

// Top-level component: "Why Choose Us" section
export const WhyChooseUs = () => {
  return (
    <motion.div
      className="container text-center theme-text my-4 pt-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Section headline */}
      <Headline text="Why Choose Us" />

      {/* Subtext paragraph */}
      <p>
        Discover a platform built for simplicity, support, and serious payouts —
        made for anyone looking to turn unused software licenses into real cash.
      </p>

      {/* Main content section (info + image) */}
      <InformationAboutUs />
    </motion.div>
  );
};

// Component: The two-column + image layout with animated content blocks
const InformationAboutUs = () => {
  // 🟢 left-numbered features shown on the left (or right on large screens)
  const odd = [
    {
      id: 1,
      title: "Round-the-Clock Support",
      description:
        "Our support team is available 24/7 to assist you at every step — day or night, we're here to help."
    },
    {
      id: 2,
      title: "Maximum Payouts",
      description:
        "Get the highest possible returns for your software. The more you sell, the more you earn — simple as that."
    }
  ];

  // 🔵 right-numbered features shown on the right
  const even = [
    {
      id: 3,
      title: "No Tech Skills Needed",
      description:
        "Designed for simplicity. Whether you're a beginner or a pro, our step-by-step process makes selling easy."
    },
    {
      id: 4,
      title: "100% Secure Process",
      description:
        "Your data and transactions are protected with industry-grade encryption and verified resale procedures."
    }
  ];

  return (
    <div className="row my-3 py-4">
      {/* Left column: odd-numbered info blocks */}
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 order-lg-first">
        <div className="d-flex flex-column gap-5">
          {odd.map((item) => (
            <motion.div
              className="text-start text-lg-end"
              key={item.id}
              variants={blockVariants}
            >
              <h2>{item.id}.</h2>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Center column: Image */}
      <motion.div
        className="col-12 col-sm-12 col-md-8 mx-auto col-lg-4 order-first"
        variants={blockVariants}
      >
        <figure>
          <img
            src={easyMoney}
            alt="24/7 easy money"
            className="img-fluid dropShadow"
          />
        </figure>
      </motion.div>

      {/* Right column: even-numbered info blocks */}
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-4 mt-md-0">
        <div className="d-flex flex-column gap-5">
          {even.map((item) => (
            <motion.div
              className="text-start"
              key={item.id}
              variants={blockVariants}
            >
              <h2>{item.id}.</h2>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
