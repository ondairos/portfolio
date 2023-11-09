import hs_shot from "../assets/hs_screen.jpg";
import flick_shot from "../assets/flick_screen.jpg";
import blog_shot from "../assets/blog_image.jpg";
import wikipocket_shot from "../assets/wikipocket.png";
import ecommerce_shot from "../assets/ecom_image.jpg";
import insta_clone_shot from "../assets/instaclone.jpg";

type projectDataTypes = {
  name: string;
  link: string;
  gh_link: string;
  image: string;
  description: string;
  tags: string[];
};

export const projectData: projectDataTypes[] = [
  {
    name: "Festival of Legends",
    link: "https://luxury-taffy-98aa2d.netlify.app/",
    gh_link: "https://github.com/ondairos/Festival_of_Legends_Cards",
    image: hs_shot,
    description:
      "This is a FullStack web application that displays all the new card content for an upcoming card game expansion.Using a custom made REST API endpoint data is served to a React application that displays it, filtered by classes.",
    tags: [
      "NodeJS",
      "ExpressJS",
      "ReactJS",
      "TypeScript",
      "Axios",
      "REST API",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Personal Blog",
    link: "https://blog-ondairos.vercel.app/",
    gh_link: "https://github.com/ondairos/blog",
    image: blog_shot,
    description:
      "Personal static generated Blog created with NextJS and deployed on Vercel.Adding blog posts through .md files, parsing them with gray-matter and remark and displaying them to the user.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Gray Matter", "Remark"],
  },
  {
    name: "Flick Movie Search",
    link: "https://react-movie-deploy.vercel.app/",
    gh_link: "https://github.com/ondairos/react_movie_project",
    image: flick_shot,
    description:
      "Movie Search App, utilizing ReactJS and OMDb API.Type your query in the search box and click the icon to get your info about the movies you want.",
    tags: ["ReactJS", "JavaScript", "OMDb API", "HTML", "CSS"],
  },
  {
    name: "WikiPocket",
    link: "https://wiki-pocket.vercel.app/",
    gh_link: "https://github.com/ondairos/WikiPocket",
    image: wikipocket_shot,
    description:
      "WikiPocket is a wikipedia search page that provides the user wikipedia based on provided query.It allows users to view a small summary and thumbnail of the searched keyword.",
    tags: ["NextJS", "JavaScript", "Wikipedia API", "HTML", "CSS"],
  },
  {
    name: "Instagram Clone",
    link: "https://instagram-clone-ondairos.vercel.app/",
    gh_link: "https://github.com/ondairos/instagram_clone",
    image: insta_clone_shot,
    description:
      "This is a project that aims to replicate features of Instagram using modern web technologies.The project includes frontend components and Firebase integration for authentication and data storage.",
    tags: [
      "NextJS",
      "TailwindCSS",
      "Firebase",
      "Recoil",
      "TypeScript",
      "Next-Auth",
    ],
  },
  {
    name: "e-Commerce Page",
    link: "https://ecommerce-app-taupe-six.vercel.app/",
    gh_link: "https://github.com/ondairos/ecommerce-app",
    image: ecommerce_shot,
    description:
      "e-Commerce webpage that displays Deals of the Day, Modal View, Rating and Details of products provided by a store API. <br></br> This is a FrontEnd project made with NextJS.",
    tags: [
      "NextJS",
      "HeadlessUI",
      "Hero Icons",
      "HTML",
      "TailwindCSS",
      "TypeScript",
    ],
  },
];
