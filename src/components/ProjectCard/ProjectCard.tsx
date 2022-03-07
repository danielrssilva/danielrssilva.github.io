import React, { ReactElement } from "react";
import { capitalize } from "lodash";

import Container, {
  Footer,
  LangsContainer,
  LinksContainer,
  TechsContainer,
} from "./ProjectCard.styles";
import { Text } from "../Typography";
import { ProjectCardProps } from "./ProjectCard.types";
import { TagsContainer } from "./ProjectCard.styles";

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  const {
    id,
    name,
    img,
    description,
    github,
    alternateLink,
    tags,
    technologies,
  } = project;
  return (
    <Container>
      <legend>{name}</legend>
      <TagsContainer>
        {tags.map(({ tag, icon }) => (
          <span key={tag}>
            <img src={require(`../../assets/${icon}`)} alt={tag} />
          </span>
        ))}
      </TagsContainer>
      {img && <img src={require(`../../assets/${img}`)} alt={img} />}
      {description && <Text>{description}</Text>}
      <Footer>
        <TechsContainer>
          {technologies &&
            technologies.map(({ icon, langs }) => (
              <TechsContainer>
                <img src={require(`../../assets/${icon}`)} alt={img} />
                {langs && (
                  <LangsContainer>
                    {langs?.map((l) => (
                      <div>
                        <img
                          src={require(`../../assets/${l.icon}`)}
                          alt={img}
                        />
                      </div>
                    ))}
                  </LangsContainer>
                )}
              </TechsContainer>
            ))}
        </TechsContainer>
        <LinksContainer>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img src={require(`../../assets/github.png`)} alt={img} />
            </a>
          )}
          {alternateLink && (
            <a href={alternateLink} target="_blank" rel="noopener noreferrer">
              <img src={require(`../../assets/link.png`)} alt={img} />
            </a>
          )}
        </LinksContainer>
      </Footer>
    </Container>
  );
};

export const ProjectCardSkeleton = (): ReactElement => {
  return <></>;
};

export default ProjectCard;
