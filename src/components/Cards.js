import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Checkout some of my other projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias ipsam itaque, natus totam unde libero, fugiat provident asperiores..."
              label="Label 1"
              path="/"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias ipsam itaque, natus totam unde libero, fugiat provident asperiores..."
              label="Label 2"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias ipsam itaque, ..."
              label="Label 3"
              path="/"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias ipsam itaque, ..."
              label="Label 4"
              path="/"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias ipsam itaque, ..."
              label="Label 5"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
