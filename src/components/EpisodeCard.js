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

export default function LocationCard({ name, air_date, episode, characters }) {
  return (
    <Card>
      <CardBody>
        <h3>Title: {name}</h3>
        <p>Episode: {episode}</p>
        <p>Air Date: {air_date}</p>
        <h4>Characters in episode:</h4>
        <ul>
          {/* map through all the characters to create list */}
          {characters.map(character => {
            return <li><a href={character}>{character}</a></li>
          })}
        </ul>
      </CardBody>
    </Card>
  );
}