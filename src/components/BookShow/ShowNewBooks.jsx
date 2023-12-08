import PropTypes from "prop-types";
import config from "../../config/index.js";
import {CardProductContext} from "../Cart/CardProductProvider.jsx";
import {useContext, useState} from "react";
import {baseUrl} from "../../config/baseUrl.jsx";

export default function ShowNewBook({newBook, addToCart}) {

  const {setProduct} = useContext(CardProductContext);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [clickHeart, setClickHeart] = useState(false)

  function handleClickToHeart() {
    setClickHeart(!clickHeart)
  }

  const currentColor = clickHeart ? 'red' : ''

  function handleIsAddCart() {
    setIsAddToCart(true);
  }

  return (
      <div className="mt-2 d-flex flex-column flex-sm-row flex-md-row font-sans bg-white rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
        <div className="col-9 col-sm-5 mx-auto col-md-4">
          <img
              src={newBook.image}
              alt={newBook.title}
              className=""
              loading="lazy"
          />
        </div>
        <div className="col-11  col-sm-8 mx-sm-auto col-md-7">
          <div className="d-flex flex-column justify-content-center">
            <h1 className="flex-auto text-center text-xl-start text-md-start mt-2 text-lg font-semibold text-slate-900">
              {newBook.title}
            </h1>
            <div
                className="text-center flex-none mt-2 text-xl-start text-md-start order-1 text-lg font-semibold text-red-400 "
                // style={{color: "#2969ED"}}
            >
              {newBook.price}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
          <div className="d-flex mb-5 text-sm font-medium justify-content-evenly">
            <div className="d-flex">
              <a className="h-10 px-2 mr-4 font-semibold rounded-md text-white flex items-center justify-center"
                  style={{background: "#2969ED"}}
                  type="submit"
                  href={`${baseUrl}${config.routes.learnmore}/${newBook.isbn13}`}
                  onClick={() => {
                    setProduct(newBook);
                  }}>
                More info
              </a>
              <button
                  onClick={() => {
                    addToCart(newBook);
                    handleIsAddCart();
                  }}
                  className="h-10 px-2 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                  disabled={isAddToCart}  // disable the button when isAddToCart is true
              >
                {isAddToCart ? (<i className="text-4xl text-success bi bi-cart-check-fill"></i>) : (<i className="text-2xl bi bi-cart-plus"></i>)}
              </button>
            </div>
            <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50"
                type="button"
                aria-label="Like"
                onClick={handleClickToHeart}>
              <svg width={20} height={20} fill={currentColor} aria-hidden="true">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
  );
}

ShowNewBook.propTypes = {
  newBook: PropTypes.any.isRequired,
  addToCart: PropTypes.any.isRequired,
};
