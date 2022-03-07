import Lang from "./Lang";

interface Technology {
  id: number;
  type: String;
  icon: String;
  langs?: Lang[];
}

export default Technology;
