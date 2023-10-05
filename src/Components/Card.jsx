import React from "react";
import image from "./images/user.png";
import "./Card.css";
export const Card = () => {
  const list = [
    {
      date: "3.3.0(14/05/2018)",
      New: "New",
      img: image,
      name: "Kewin Joe",
      body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      button: "Dowload",
      spanCssClass: "colors",
      bg: "green",
      color:"white",
    },
    {
      date: "3.3.0(14/05/2018)",
      New: "New",
      img: image,
      name: "Kewin Joe",
      body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      button: "Dowload",
      spanCssClass: "colors",
      bg: "red",
      color:"white",
    },
    {
      date: "3.3.0(14/05/2018)",
      New: "New",
      img: image,
      name: "Kewin Joe",
      body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      button: "Dowload",
      spanCssClass: "colors",
      bg: "purple",
      color:"white",
    },
    {
        date: "3.3.0(14/05/2018)",
        New: "New",
        img: image,
        name: "Kewin Joe",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        button: "Dowload",
        spanCssClass: "colors",
        bg: "green",
        color:"white",
      },
      {
        date: "3.3.0(14/05/2018)",
        New: "New",
        img: image,
        name: "Kewin Joe",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        button: "Dowload",
        spanCssClass: "colors",
        bg: "red",
        color:"white",
      },
      {
        date: "3.3.0(14/05/2018)",
        New: "New",
        img: image,
        name: "Kewin Joe",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        button: "Dowload",
        spanCssClass: "colors",
        bg: "purple",
        color:"white",
      },
      {
        date: "3.3.0(14/05/2018)",
        New: "New",
        img: image,
        name: "Kewin Joe",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        button: "Dowload",
        spanCssClass: "colors",
        bg: "green",
        color:"white",
      },
      {
        date: "3.3.0(14/05/2018)",
        New: "New",
        img: image,
        name: "Kewin Joe",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        button: "Dowload",
        spanCssClass: "colors",
        bg: "red",
        color:"white",
      },
      {
        date: "3.3.0(14/05/2018)",
        New: "New",
        img: image,
        name: "Kewin Joe",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        button: "Dowload",
        spanCssClass: "colors",
        bg: "purple",
        color:"white",
      },
  ];
  return (
    <div className="cards">
      {list.map((item) => (
        <div className="card">
          <div className="header">
            <span className="date">{item.date}</span>
            <div className="flex-header">
              <div className="CardProfileButton">
                <div
                  className={item.spanCssClass}
                  style={{ backgroundColor: item.bg,color:item.color}}
                >
                  New
                </div>
                <div className="right-header">
                <div className="imageContainerProfile">
                {" "}
                <img className="image" src={item.img}></img>
              </div>
                <div className="name">{item.name}</div>
              </div>
             </div>
            </div>
          </div>
          <div className="body">{item.body}</div>
          <div className="footer"><button>{item.button}</button></div>
        </div>
      ))}
    </div>
  );
};
