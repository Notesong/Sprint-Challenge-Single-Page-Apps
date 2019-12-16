import React from "react";
import {Route, Link} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const Navlink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  margin: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export default function App() {
  return (
    <main>
      <Header />
      <Nav>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/characters">Characters</Navlink>
      </Nav>
      
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
