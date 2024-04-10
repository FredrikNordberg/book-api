import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const searchBook = () => {
    if (search.trim() === "") {
      return;
    }

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(search)}&key=AIzaSyA4YV-PDkrW4YCycYr6WbXXloZZbYC8R20`)
      .then((res) => {
        setBookData(res.data.items || []);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  return (
    <>
      <div className="background-container"></div>
      <div className="header">
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  searchBook();
                }
              }}
            />
            <button onClick={searchBook}>SEARCH</button>
          </div>
        </div>
      </div>
      <div className="container">
        <Card
          book={bookData}
          show={showModal}
          setShow={setShowModal}
          bookItem={selectedBook}
          setBookItem={setSelectedBook}
        />
      </div>
    </>
  );
};

export default Main;



