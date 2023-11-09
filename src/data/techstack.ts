// import tech stack icons
import ReactIcon from "../assets/tsicons/react-js-icon.svg";
import HtmlIcon from "../assets/tsicons/html-icon.svg";
import CSSIcon from "../assets/tsicons/css-icon.svg";
import JSIcon from "../assets/tsicons/javascript-programming-language-icon.svg";
import VueIcon from "../assets/tsicons/vue-icon.svg";

import NodeIcon from "../assets/tsicons/node-js-icon.svg";
import MongoIcon from "../assets/tsicons/mongodb-icon.svg";
import ExpressIcon from "../assets/tsicons/express-js-icon.svg";
import MySQLIcon from "../assets/tsicons/mysql-icon.svg";
import PythonIcon from "../assets/tsicons/python-programming-language-icon.svg";

import gitIcon from "../assets/tsicons/git-icon.svg";
import dockerIcon from "../assets/tsicons/docker-icon.svg";
import figmaIcon from "../assets/tsicons/figma-icon.svg";

type techStackData = {
  name: string;
  image: string;
};

export const frontEndTechstackData: techStackData[] = [
  {
    name: "HTML",
    image: HtmlIcon,
  },
  {
    name: "CSS",
    image: CSSIcon,
  },
  {
    name: "JavaScript",
    image: JSIcon,
  },
  {
    name: "ReactJS",
    image: ReactIcon,
  },
  {
    name: "VueJS",
    image: VueIcon,
  },
];

export const backendTechstackData: techStackData[] = [
  {
    name: "NodeJS",
    image: NodeIcon,
  },
  {
    name: "ExpressJS",
    image: ExpressIcon,
  },
  {
    name: "MongoDB",
    image: MongoIcon,
  },
  {
    name: "MySQL",
    image: MySQLIcon,
  },
  {
    name: "Python",
    image: PythonIcon,
  },
];

export const otherTechstackData: techStackData[] = [
  {
    name: "Git",
    image: gitIcon,
  },
  {
    name: "Docker",
    image: dockerIcon,
  },
  {
    name: "Figma",
    image: figmaIcon,
  },
];
