import { Headline } from "../Reusable/Headline"
import carouselData from "../../services/carousel.json"





export const CustomerReviews = ()=>{


    return (
        <>
       <div className="container text-white ">
        <Headline text="Testimonials" />
        
        <div className="py-2 d-flex flex-column">
            <Carousel/>
        </div>
       </div>

        </>
    )
}




const Carousel = ()=>{


    return(
 <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner py-5 px-5 px-lg-5 "> {/* Add padding to whole inner area */}
    {carouselData.map((curtElem) => {
      const { id, image, say, name, work } = curtElem;
      return (
        <div
          className={`carousel-item ${id === 1 ? "active" : ""}`}
          key={id}
          data-bs-interval="10000"
        >
          <div className="container boxShadow ">
            <div className="row align-items-center justify-content-center text-center text-md-start  py-5 ">
              {/* gx-5 adds horizontal spacing between columns */}
              <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center">
                <figure className="mb-0 text-center">
                  <img
                    src={image}
                    alt="customer"
                    className="img-fluid rounded-circle w-50"
                  />
                </figure>
              </div>
              <div className="col-12 col-md-6">
                <div className="px-3 px-md-4">
                  <p className="lead">{say}</p>
                  <h5 className="fw-bold mb-0 text-end ">{name}</h5>
                  <p className="text-info text-end">{work}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* Carousel Controls */}
  <button
    className="carousel-control-prev w-auto"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
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



    )
}


