import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import service7 from "../assets/service7.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Hogar",
      subTitle:
        " Encuentre el contratista que necesita y comience hoy el proyecto de renovación de sus sueños..",
    },
    {
      icon: service2,
      title: "Salud",
      subTitle:
        "Todo lo referente a tu salud lo econtras en un solo lugar",
    },
    {
      icon: service3,
      title: "Comercio",
      subTitle:
        " Todas las compras en un solo lugar",
    },
    {
      icon: service4,
      title: "Automotor",
      subTitle:
        " Todo para tu auto",
    },
    {
      icon: service5,
      title: "Alquileres",
      subTitle:
        " Todos los alquileres aqui",
    },
    {
      icon: service6,
      title: "Alquileres",
      subTitle:
        " Todos los alquileres aqui",
    },
    {
      icon: service7,
      title: "Alquileres",
      subTitle:
        " Todos los alquileres aqui",
    },
  ];
  
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service" key={index}> {/* Agregar key */}
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
