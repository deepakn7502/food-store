import React, { useState, useEffect } from "react";

import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";

import Card from "./Card";
import Contact from "./Contact";
import UploadItem from "./UploadItem";

import "./Home.css";
import Navbar from "./Navbar";
import { db } from "../firebase";
import UpdateItem from "./UpdateItem";

function Home() {
  const [details, setDetails] = useState([]);

  const detailsCollectionsRef = collection(db, "items");

  useEffect(() => {
    const getDetails = async () => {
      const data = onSnapshot(detailsCollectionsRef);
      setDetails(data.docs.map((doc) => ({ ...doc.dta(), id: doc.id })));
    };
    getDetails();
    console.log(details);
  }, []);
  return (
    <div className="page-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="cards-list">
        {details.map((item) => {
          return (
            <div>
              <Card
                name={item.itemname}
                price={item.itemprice}
                imageURL={item.imgURL}
              />
            </div>
          );
        })}
      </div>
      <div className="contact-bar">
        <Contact />
      </div>
      <div className="crud">
        <UploadItem />
        <UpdateItem />
      </div>
    </div>
  );
}

export default Home;
