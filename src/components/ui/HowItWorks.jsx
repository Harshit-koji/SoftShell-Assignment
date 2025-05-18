import { Headline } from "../Reusable/Headline";
import "../../styleComp/HowItWorks.scss";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

// 🔹 Process steps array
const process = [
  {
    icon: "bi-upload",
    color: "text-primary",
    title: "Upload License",
    desc: "Submit details or proof of your software license to get started.",
  },
  {
    icon: "bi-graph-up-arrow",
    color: "text-success",
    title: "Get Valuation",
    desc: "We evaluate your license and show its market value.",
  },
  {
    icon: "bi-cash-stack",
    color: "text-warning",
    title: "Get Paid",
    desc: "Receive payment securely after verification and approval.",
  },
];

export const HowItWorks = () => {
  return (
    <motion.section
      className="container mt-4 mb-5 py-5 theme-text"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Headline text={"How It Works"} />
      <p className="text-center mb-5">
        Sell your unused software license in just three simple steps.
      </p>

      <div className="row text-center">
        {process.map((item, index) => (
          <motion.div
            className="col-12 col-sm-6 col-md-4 mb-4"
            key={index}
            variants={cardVariants}
          >
            <div className="p-4 border rounded shadow h-100 cards">
              <i className={`bi ${item.icon} fs-1 ${item.color} mb-3`}></i>
              <h5>{item.title}</h5>
              <p className="theme-text">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
