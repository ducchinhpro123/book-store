import axios from "axios";

async function fetchNewBooks() {
  const response = await axios.get("https://api.itbook.store/1.0/new");
   // Retrieve only the first 9 books
  return response.data.books.slice(0, 9);
}

export default fetchNewBooks;
