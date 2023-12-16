// import { interestingBookJson } from "../json/InterestingBooksJson.jsx";
import { books } from "../../json/booksInteresting.jsx";
import PropTypes from "prop-types";
import ShowInterestingBook from "./ShowInterestingBook.jsx";

export default function InterestingBooks({ field }) {
  return (
    <>
      {books[field].map((book) => {
        return (
          <div key={book.isbn13} className="col-12 col-sm-11 col-md-6 col-lg-6 col-xl-4 d-flex">
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
