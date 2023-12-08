// import { interestingBookJson } from "../json/InterestingBooksJson.jsx";
import { books } from "../../json/booksInteresting.jsx";
import PropTypes from "prop-types";
import ShowInterestingBook from "./ShowInterestingBook.jsx";

export default function InterestingBooks({ field }) {
  return (
    <>
      {books[field].map((book) => {
        return (
          <div key={book.isbn13} className="col-13 col-sm-11 col-md-6 col-lg-6 col-xl-3 d-flex filtr-item">
            <ShowInterestingBook book={book} />
          </div>
        );
      })}
    </>
  );
}

InterestingBooks.propTypes = {
  field: PropTypes.string.isRequired,
};
