import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const charList = response.data.results;
        console.log(charList);
        setCharacterList(charList);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      })
  }, []);

  return (
    <section className="character-list">
      {characterList.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}
