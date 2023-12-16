import PropTypes from "prop-types";

export default function CardReview({ image }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-1 product">
            <div className="row">
              <div className="col-md-12 col-lg-9 mx-auto">
                <div className="product-image">
                  {/* <div className="image img-fluid" /> */}
                  <div className="image img-fluid d-flex justify-content-center w-full">
                    <img src={image} alt="product review" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardReview.propTypes = {
  image: PropTypes.string,
};
