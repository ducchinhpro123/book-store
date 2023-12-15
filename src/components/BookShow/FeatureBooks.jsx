// import { featureBooksJson } from "../json/FeatureBooksJson";
// import { FeatureBooksJson } from '../json/FeatureBooksJson'
// import FeatureBooksRender from "../json/FeatureBooksJson";

import {useEffect, useState} from "react";
import FeatureBooksRender from "./FeatureBooksRender.jsx";
import fetchNewBooks from "../../api/defaultNewBookApi.js";

export default function FeatureBooks() {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchNewBooks();
        setNewBooks(result);
      } catch (error) {
        console.error("Failed to fetch books: ", error)
      }
    };

    fetchData().catch(error => console.error("Failed to fetch data: ", error));
  }, []);

  return (
      <div className="container" style={{marginTop: 28}}>
        <div className="row d-xl-flex justify-content-xl-center">
          <div className="col-xl-3">
            <div/>
            <p
                className="d-xl-flex justify-content-xl-center"
                style={{fontWeight: "bold", fontSize: 30, textAlign: 'center'}}
            >
              Our New Books
            </p>
          </div>
        </div>
        <div className="">
          <FeatureBooksRender newBooks={newBooks}/>
          {/* </div> */}
        </div>
      </div>
  );
}
