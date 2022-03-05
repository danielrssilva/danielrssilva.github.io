export interface FilterProps {
  render?: boolean;
  applyFilter: (obj: filterObject) => void;
}

interface filterObject {
  selectedTags: Tag[];
  selectedTechs: Tech[];
}

export interface Tag {
  tag: String;
  checked: boolean;
}

export interface Tech {
  tech: String;
  checked: boolean;
}
