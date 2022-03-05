import React, { ReactElement, useState } from "react";
import { Subtitle1 } from "../Typography";
import Checkbox from "../Checkbox";

import Container from "./Filter.styles";
import { FilterProps, Tech, Tag } from "./Filter.types";

const allTags = [
  { tag: "design", checked: true },
  { tag: "development", checked: true },
];
const allTechs = [
  { tech: "react", checked: true },
  { tech: "vue", checked: true },
  { tech: "design-tool", checked: true },
];

const Filter = ({ render, applyFilter }: FilterProps): ReactElement => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>(allTags);
  const [selectedTechs, setSelectedTechs] = useState<Tech[]>(allTechs);

  const toggleAll = () => {
    const newSelectedTags = [...selectedTags];
    const newSelectedTechs = [...selectedTechs];

    const hasFalseTag = newSelectedTags.find((t) => t.checked === false);
    const hasFalseTech = newSelectedTechs.find((t) => t.checked === false);

    if (hasFalseTag || hasFalseTech) {
      newSelectedTags.forEach((t) => (t.checked = true));
      newSelectedTechs.forEach((t) => (t.checked = true));
    } else {
      newSelectedTags.forEach((t) => (t.checked = false));
      newSelectedTechs.forEach((t) => (t.checked = false));
    }
    setSelectedTags(newSelectedTags);
    setSelectedTechs(newSelectedTechs);
  };

  const handleApply = () => {
    const filter = { selectedTags, selectedTechs };
    applyFilter(filter);
  };

  const handleTagClick = (value: String) => {
    const newSelectedTags = [...selectedTags];
    const tagIndex = newSelectedTags.findIndex(({ tag }) => tag === value);

    newSelectedTags[tagIndex].checked = !newSelectedTags[tagIndex].checked;
    setSelectedTags(newSelectedTags);
  };

  const handleTechClick = (value: String) => {
    const newSelectedTechs = [...selectedTechs];
    const techIndex = newSelectedTechs.findIndex(({ tech }) => tech === value);

    newSelectedTechs[techIndex].checked = !newSelectedTechs[techIndex].checked;
    setSelectedTechs(newSelectedTechs);
  };

  return (
    <Container render={render} applyFilter={applyFilter}>
      <legend>Filter projects</legend>
      <div>
        <section>
          <Subtitle1>Tags</Subtitle1>
          <div>
            {allTags.map(({ tag }) => (
              <Checkbox
                label={tag}
                onChange={() => handleTagClick(tag)}
                checked={selectedTags.find((t) => t.tag === tag)?.checked}
                key={tag}
              />
            ))}
          </div>
        </section>
        <section>
          <Subtitle1>Techonolgies</Subtitle1>
          <div>
            {allTechs.map(({ tech }) => (
              <Checkbox
                label={tech}
                onChange={() => handleTechClick(tech)}
                checked={selectedTechs.find((t) => t.tech === tech)?.checked}
                key={tech}
              />
            ))}
          </div>
        </section>
        <button onClick={toggleAll}>Toggle all</button>
        <button onClick={handleApply}>Apply</button>
      </div>
    </Container>
  );
};

export default Filter;
