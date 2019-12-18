import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Searchbox = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 2rem 0;
`;

export default function SearchForm({ characterList, setSearchResults }) {
  // state to hold user's search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // using filter(), filter the characterList to find characters that match the search
    const results = characterList.filter(character => {
      // convert both the user's entry and the name in the array to lowercase
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // set the results of the filter to characterList
    setSearchResults(results);
  }, [searchTerm]);

  // sets the current value of the user's input to the searchTerm state
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <Searchbox>
      {/* search box for character cards */}
      <form>
        <label htmlFor="name">Search: </label>
        <input
          id="name"
          type="text"
          name="textField"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
    </Searchbox>      
  );
}
