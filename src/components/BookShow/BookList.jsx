import BookShow from "./BookShow.jsx";
import PropTypes from "prop-types";
import {useContext} from "react";
import {CartContext} from "../Cart/CartContext.jsx";
import {CardProductContext} from "../Cart/CardProductProvider.jsx";

export default function BookList({books}) {
  const {addToCart} = useContext(CartContext);
  const {setProduct} = useContext(CardProductContext);

  return (
      <div className="row">
        {books.map((book) => (
            <div className="col-7 mx-auto col-sm-6 col-md-6 col-lg-4 col-xl-3" key={book.isbn13}>
              <BookShow book={book} addToCart={addToCart} setProduct={setProduct}/>
            </div>
        ))}
      </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};
