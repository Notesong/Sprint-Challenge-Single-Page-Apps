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

const Image = styled.img`
  height: 80%;
`;

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <CardBody>
        <h3>Name: {name}</h3>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
        {/* check if there are any characters at location before displaying */}
        { residents.length > 0 ? <h4>Characters at location:</h4> : "" }
        <ul>
          {/* map through all the residents to create list */}
          { residents.map(resident => {
            return <li><a href={resident}>{resident}</a></li>
          })}
        </ul>
      </CardBody>
    </Card>
  );
}
