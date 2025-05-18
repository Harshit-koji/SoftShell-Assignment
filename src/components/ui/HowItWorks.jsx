import { Headline } from "../Reusable/Headline"



export const HowItWorks = () => {


    return (
        <>
            <section className="container mt-4 mb-5  py-5 text-white">
                {/* <h2 className="text-center mb-4">How It Works</h2> */}
                <Headline text={"How It Works"}/>
                <p className="text-center mb-5 text-">Sell your unused software license in just three simple steps.</p>

                <div className="row text-center">

                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <i className="bi bi-upload fs-1 text-primary mb-3"></i>
                            <h5>Upload License</h5>
                            <p className="text-white">Submit details or proof of your software license to get started.</p>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <i className="bi bi-graph-up-arrow fs-1 text-success mb-3"></i>
                            <h5>Get Valuation</h5>
                            <p className="text-white">We evaluate your license and show its market value.</p>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <i className="bi bi-cash-stack fs-1 text-warning mb-3"></i>
                            <h5>Get Paid</h5>
                            <p className="text-white">Receive payment securely after verification and approval.</p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}



