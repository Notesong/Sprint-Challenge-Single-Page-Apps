import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";
import styled from "styled-components";

const EpisodeListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
`;

const ComponentTitle = styled.h2`
    text-align: center;
`;

export default function EpisodesList() {
  // state setup for the episodes list.
  const [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    // create axios call to get episode information from the server
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        const epList = response.data.results;
        console.log(epList);
        // set the retrieved information to episodesList
        setEpisodesList(epList);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      })
  }, []);

  return (
    // displays the episode section
    <section className="episode-section">
        <ComponentTitle>Episodes</ComponentTitle>
      {/* render the episode list from searchResults by mapping over it */}
      <EpisodeListContainer>
            {episodesList.map(episode => {
                return <EpisodeCard 
                    key={episode.id} 
                    name={episode.name}
                    air_date={episode.air_date}
                    episode={episode.episode}
                    characters={episode.characters}
                />
            })}
      </EpisodeListContainer>
    </section>
  );
}