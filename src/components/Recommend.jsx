import React, { useState } from "react";
import styled from "styled-components";
import oficio1 from "../assets/oficio1.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: oficio1,
      title: "oficio 1",
      subTitle: "aqui va la descripcion",
      cost: "$precio",
      duration: "Calificacion",
    },
    {
      image: oficio1,
      title: "oficio 2",
      subTitle: "aqui va la descripcion",
      cost: "54,200",
      duration: "Calificacion",
    },
    {
      image: oficio1,
      title: "oficio 3",
      subTitle: "aqui va la descripcion",
      cost: "45,500",
      duration: "Calificacion",
    },
    {
      image: oficio1,
      title: "oficio 4",
      subTitle: "aqui va la descripcion",
      cost: "24,100",
      duration: "Calificacion",
    },
    {
      image: oficio1,
      title: "oficio 5",
      subTitle: "aqui va la descripcion",
      cost: "95,400",
      duration: "Calificacion",
    },
    {
      image: oficio1,
      title: "oficio 6",
      subTitle: "aqui va la descripcion",
      cost: "38,800",
      duration: "Calificacion",
    },
  ];

  const packages = [
    "Lo mas popular",
    "Los mas recomendados",
    "según ubicación ",
    "por precios",
  ];

  const [active, setActive] = useState(1);

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Lo más recomendado</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
                key={index} 
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination, index) => {
          return (
            <div className="destination" key={index}>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
