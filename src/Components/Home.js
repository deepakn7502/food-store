import React, { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";

import Card from "./Card";
import Contact from "./Contact";

import "./Home.css";
import Navbar from "./Navbar";
import { db } from "../firebase";

function Home() {
  const [details, setDetails] = useState([]);

  const detailsCollectionsRef = collection(db, "items");

  useEffect(() => {
    const getDetails = async () => {
      const data = await getDocs(detailsCollectionsRef);
      setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDetails();
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
                desc={item.desc}
              />
            </div>
          );
        })}
      </div>
      <div className="contact-bar">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
