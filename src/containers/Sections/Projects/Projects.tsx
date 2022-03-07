import React, { useState } from "react";
import { H2 } from "../../../components/Typography";
import Filter from "../../../components/Filter";
import ProjectCard from "../../../components/ProjectCard";
import { useBoolean } from "../../../hooks/useBoolean";
import Container, { SectionTitle } from "./Projects.style";
import Tag from "../../../constants/enums/Tag";
import Language from "../../../constants/enums/Language";

const projectList = [
  {
    id: 1,
    name: "Project name",
    img: "img.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien nisl urna massa at. Accumsan pulvinar dui enim eu consectetur massa. Eget consequat metus in senectus. Elementum egestas et consequat, euismod egestas eu arcu, sit id.",
    github: "https://github.com/danielrssilva",
    alternateLink: "https://github.com/danielrssilva",
    tags: [
      { id: 1, tag: Tag.DEVELOPMENT, icon: "development.png" },
      { id: 2, tag: Tag.DESIGN, icon: "design.png" },
    ],
    technologies: [
      {
        id: 1,
        type: "AdobeXD",
        icon: "adobe.png",
      },
      {
        id: 2,
        type: "React",
        icon: "react.png",
        langs: [{ id: 1, lang: Language.TYPESCRIPT, icon: "ts.png" }],
      },
    ],
  },
  {
    id: 1,
    name: "Project name",
    img: "img.png",
    github: "https://github.com/danielrssilva",
    tags: [{ id: 1, tag: Tag.DESIGN, icon: "design.png" }],
    technologies: [
      {
        id: 1,
        type: "AdobeXD",
        icon: "adobe.png",
      },
    ],
  },
  {
    id: 1,
    name: "Project name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien nisl urna massa at. Accumsan pulvinar dui enim eu consectetur massa. Eget consequat metus in senectus. Elementum egestas et consequat, euismod egestas eu arcu, sit id.",
    alternateLink: "https://github.com/danielrssilva",
    tags: [{ id: 1, tag: Tag.DEVELOPMENT, icon: "development.png" }],
    technologies: [
      {
        id: 2,
        type: "Vue",
        icon: "vue.png",
        langs: [
          { id: 2, lang: Language.JAVASCRIPT, icon: "js.png" },
          { id: 3, lang: Language.CSS, icon: "css.png" },
        ],
      },
    ],
  },
];

const Projects = (): JSX.Element => {
  const [renderFilterMenu, toggleRenderFilterMenu] = useBoolean(false);
  const [filter, setFilter] = useState({});
  // const [projectList2, setProjectList] = useState(ProjectList);

  const applyFilter = (filter: {}) => {
    setFilter(filter);
    toggleRenderFilterMenu();
  };

  return (
    <Container id="projects">
      {projectList.map((project) => (
        <ProjectCard project={project} />
      ))}
      {/* <ProjectCard project={projectList[2]} />
      <ProjectCard project={projectList[1]} />
      <ProjectCard project={projectList[0]} />
      <ProjectCard project={projectList[2]} />
      <ProjectCard project={projectList[2]} />
      <ProjectCard project={projectList[1]} />
      <ProjectCard project={projectList[0]} />
      <ProjectCard project={projectList[1]} />
      <ProjectCard project={projectList[2]} />
      <ProjectCard project={projectList[1]} />
      <ProjectCard project={projectList[0]} /> */}
      <SectionTitle>
        <Filter render={renderFilterMenu} applyFilter={applyFilter} />
        <img
          src={require(`../../../assets/filter.png`)}
          alt="filter"
          onClick={toggleRenderFilterMenu}
        />
        <H2>Projects</H2>
      </SectionTitle>
    </Container>
  );
};

export default Projects;
