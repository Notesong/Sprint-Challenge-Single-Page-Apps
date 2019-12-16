import React from "react";
import styled from "styled-components";

const Header = styled.header `
margin-top: 4rem;
`;

const ImageContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImageContainer>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </ImageContainer>
      </Header>
    </section>
  );
}
