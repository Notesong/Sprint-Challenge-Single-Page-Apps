import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-flow: col wrap;
  margin 1%;
  width: 48%;
  background: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  @media only screen and (max-width: 800px) {
    width: 98%
  }
`;

const CardBody = styled.div`
  padding: 2rem;
`;

const CardImage = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 80%;
`;

export default function CharacterCard({ character }) {
  return (
    <Card>
      <CardImage>
        <Image src={character.image} alt={character.name} />
      </CardImage>
      <CardBody>
        <h3>{character.name}</h3>
        <p>Orgin: {character.origin.name}</p>
      </CardBody>
    </Card>
  );
}
