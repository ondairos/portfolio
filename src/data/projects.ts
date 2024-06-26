import hs_shot from "../assets/hs_screen.jpg";
import flick_shot from "../assets/flick_screen.jpg";
import blog_shot from "../assets/blog_image.jpg";
import wikipocket_shot from "../assets/wikipocket.png";
import jobSeeker_shot from "../assets/job_seeker_screen.png";
import excelsior_shot from "../assets/excelsior_tft_shot.jpg";
import energyPrices_shot from "../assets/energy_prices_shot.png";

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
    name: "Job Seeker",
    link: "https://job-seeker-ten.vercel.app/",
    gh_link: "https://github.com/ondairos/job_seeker",
    image: jobSeeker_shot,
    description:
      "Job Seeker Frontend project built with Vue, showcasing a job searching platform based on Google's Job Search page. Visit the Jobs section and select your preferred job based on criteria specified from the filters on the left.",
    tags: [
      "VueJS",
      "Vuex",
      "TypeScript",
      "TailwindCSS",
      "Vuex",
      "Font Awesome",
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
    name: "Excelsior TFT",
    link: "https://excelsior-portfolio.vercel.app/",
    gh_link: "https://github.com/ondairos/excelsior_portfolio",
    image: excelsior_shot,
    description:
      "Excelsior TFT is a vibrant project that brings a humorous touch to exploring Team Fight Tactics compositions. With an interactive hexagon layout and dynamic content updates based on user selection, users can easily navigate Tier 1 compositions. Testimonials, funny quotes create an engaging and entertaining experience for TFT enthusiasts.",
    tags: ["HTML", "SASS", "JavaScript"],
  },

  {
    name: "Energy Price App",
    link: "https://vue-data-assignment.vercel.app/",
    gh_link: "https://github.com/ondairos/vue_data_assignment/",
    image: energyPrices_shot,
    description:
      "This project showcases the use of Vue.js to create a responsive data visualization application that allows users to view and filter energy price data for three countries in a table and chart format.",
    tags: ["VueJS", "JavaScript", "TailwindCSS", "Chart.js"],
  },
  {
    name: "Festival of Legends",
    link: "https://luxury-taffy-98aa2d.netlify.app/",
    gh_link: "https://github.com/ondairos/Festival_of_Legends_Cards",
    image: hs_shot,
    description:
      "This is a FullStack web application that displays all the new card content for an upcoming card game expansion. Using a custom made REST API endpoint data is served to a React application that displays it, filtered by classes.",
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
    name: "Flick Movie Search",
    link: "https://react-movie-deploy.vercel.app/",
    gh_link: "https://github.com/ondairos/react_movie_project",
    image: flick_shot,
    description:
      "Movie Search App, utilizing ReactJS and OMDb API.Type your query in the search box and click the icon to get your info about the movies you want.",
    tags: ["ReactJS", "JavaScript", "OMDb API", "HTML", "CSS"],
  },
];
