import { Headline } from "../Reusable/Headline"
import easyMoney from "../../assets/images/easyMoney.png"





export const WhyChooseUs = () => {


    return (
        <>
            <div className="container text-center text-white  my-4 pt-2">
                <Headline text="Why Choose Us" />
                <p>Discover a platform built for simplicity, support, and serious payouts — made for anyone looking to turn unused software licenses into real cash.</p>

                <InformationAboutUs />
            </div>
        </>
    )
}





const InformationAboutUs = () => {

    // for odd number  info
    const odd = [
        {
            id: 1,
            title: "Round-the-Clock Support",
            description: "Our support team is available 24/7 to assist you at every step — day or night, we're here to help.",
        },
        {
            id: 3,
            title: "Maximum Payouts",
            description: "Get the highest possible returns for your software. The more you sell, the more you earn — simple as that.",
        }
    ];
    // for even number  info
    const even = [
        {
            id: 2,
            title: " No Tech Skills Needed",
            description: "Designed for simplicity. Whether you're a beginner or a pro, our step-by-step process makes selling easy.",
        },
        {
            id: 4,
            title: "100% Secure Process",
            description: "Your data and transactions are protected with industry-grade encryption and verified resale procedures.",
        }
    ];

    return (
        <>

            <div className="row my-3 py-4 ">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 order-lg-first ">
                    <div className="d-flex flex-column gap-5 ">
                        {
                            odd.map((curt) => {
                                const { title, id, description } = curt;
                                return <div className=" text-start text-lg-end " key={id}>
                                    <h2 className="">{id}.</h2>
                                    <h4>{title}</h4>
                                    <p >{description}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 mx-auto  col-lg-4 order-first ">
                    <figure className=" ">
                        <img src={easyMoney} alt="24/7 easy money" className="img-fluid " />
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                    <div className="d-flex flex-column gap-5">
                        {
                            even.map((curt) => {
                                const { title, id, description } = curt;
                                return <div className=" text-start" key={id}>
                                    <h2 className="">{id}.</h2>
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
