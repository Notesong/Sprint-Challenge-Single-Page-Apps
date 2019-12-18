import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";
import styled from "styled-components";

const LocationListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
`;

const ComponentTitle = styled.h2`
    text-align: center;
`;

export default function LocationsList() {
  // state setup for the locations list.
  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    // create axios call to get location information from the server
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        const localList = response.data.results;
        console.log(localList);
        // set the retrieved information to locationsList
        setLocationsList(localList);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      })
  }, []);

  return (
    // displays the location section
    <section className="location-section">
        <ComponentTitle>Locations</ComponentTitle>
      {/* render the location list from searchResults by mapping over it */}
      <LocationListContainer>
            {locationsList.map(location => {
                return <LocationCard 
                    key={location.id} 
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                    residents={location.residents}
                />
            })}
      </LocationListContainer>
    </section>

  );
}