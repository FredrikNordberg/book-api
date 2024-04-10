import React from "react";
import Modal from "./Modal";

const Card = ({ book, show, setShow, bookItem, setBookItem }) => {
  console.log(book);

  return (
    <>
      {book.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div className="card" key={item.id || index} onClick={() => { setShow(true); setBookItem(item); }}>
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">&#8377;{amount}</p>
              </div>
            </div>
          );
        }

        return null;
      })}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};

export default Card;


