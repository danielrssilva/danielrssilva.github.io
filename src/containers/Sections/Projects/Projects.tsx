import React, { useState } from "react";
import { H2 } from "../../../components/Typography";
import Filter from "../../../components/Filter";
import { useBoolean } from "../../../hooks/useBoolean";
import Container from "./Projects.style";

const Projects = (): JSX.Element => {
  const [renderFilterMenu, toggleRenderFilterMenu] = useBoolean(false);
  const [filter, setFilter] = useState({});

  const applyFilter = (filter: {}) => {
    setFilter(filter);
    toggleRenderFilterMenu();
  };

  return (
    <Container id="projects">
      <H2>WIP Card</H2>
      <H2>WIP Card</H2>
      <div style={{ position: "relative" }}>
        <Filter render={renderFilterMenu} applyFilter={applyFilter} />
        <button onClick={toggleRenderFilterMenu}>filter</button>
        <H2>Projects</H2>
      </div>
      <H2>WIP Card</H2>
      <H2>WIP Card</H2>
    </Container>
  );
};

export default Projects;
