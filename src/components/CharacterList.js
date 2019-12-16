import React, { useEffect, useState } from "react";
import {Route} from "react-router-dom";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";


const CharacterListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
`;

export default function CharacterList() {
  // state setup for the character list. This list will not change outside of initial set up.
  // characterList is only used to support searches by way of filter() in SearchForm
  const [characterList, setCharacterList] = useState([]);
  // set up changeable state for searches. Used in character card creation.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // create axios call to get character information from the server
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const charList = response.data.results;
        console.log(charList);
        // set the retrieved information to characterList and a copy to searchResults
        setCharacterList(charList);
        setSearchResults(charList);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      })
  }, []);

  return (
    // displays the character section, including the searchbox and character list
    <section className="character-section">
      {/* render the search form */}
      <Route render={(props) => (
        <SearchForm 
          {...props}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          characterList={characterList}
        />
      )} />
      {/* render the character list from searchResults by mapping over it */}
      <CharacterListContainer>
            {searchResults.map(character => {
              return <CharacterCard key={character.id} character={character} />
            })}
      </CharacterListContainer>
    </section>

  );
}