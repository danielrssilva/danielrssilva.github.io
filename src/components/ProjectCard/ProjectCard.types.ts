import Technology from "../../constants/interfaces/Technology";
import Tag from "../../constants/interfaces/Tag";

export interface ProjectCardProps {
  project: {
    id: number;
    name: String;
    img?: string;
    description?: String;
    github?: string;
    alternateLink?: string;
    tags: Tag[];
    technologies: Technology[];
  };
}

// const project = {
//   id: 1,
//   name: "Project name",
//   img: "path/to/img" || null,
//   description: "Lorem ipsum" || null,
//   github: "link/to/project/github" || null,
//   link: "link/to/access/project" || null,
//   tags: [
//     // at least 1
//     { id: 1, tag: Tags.DEVELOPMENT, icon: "path/to/tag/icon" },
//     { id: 2, tag: Tags.DESIGN, icon: "path/to/tag/icon" },
//   ],
//   technologies: [
//     {
//       id: 1,
//       type: "AdobeXD",
//       icon: "path/to/icon",
//       langs: null,
//     },
//     {
//       id: 2,
//       type: "React",
//       icon: "path/to/icon",
//       langs:
//         [{ id: 1, lang: Languages.TYPESCRIPT, icon: "path/to/lang/icon" }] ||
//         null,
//     },
//   ],
// };
