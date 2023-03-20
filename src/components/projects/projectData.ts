import codenamesImage from "../../assets/projects/codenames-preview700.png";
import graceShopperImage from "../../assets/projects/grace-shopper-preview700.png";
import bugHuntImage from "../../assets/projects/bug-hunt-preview700.png";

class Project {
  deployLink: string;
  githubLink: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;

  constructor(
    deployLink: string,
    githubLink: string,
    title: string,
    subtitle: string,
    description: string,
    image: string
  ) {
    this.deployLink = deployLink;
    this.githubLink = githubLink;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.image = image;
  }
}

const capstone = new Project(
  "https://codenames-0nt7.onrender.com/",
  "https://github.com/2208-Capstone-Team-2/codenames",
  "Codenames",
  "an online multiplayer card game",
  ` Written in typescript with a blend of firebase & SQL for backend.
    Features synchronized gameplay across all players' screens, responsive design, and user chat box for a seamless user experience. 
    Created by a team of five members, over the course of 6 weeks.
`,
  codenamesImage
);

const graceShopper = new Project(
  "https://comic-overflow.onrender.com/",
  "https://github.com/2208-GS-Team-1/Comic-Overflow",
  "Comic Overflow",
  "an e-commerce site",
  `   Comic Overflow is an e-commerce platform for comic book enthusiasts built over the course of a 2.5 week period in a team of four. 
    Features include a from-scratch backend schema, account creation & authentication, persistent user cart, Stripe API checkout, and admin view that lets website owners add and delete products and orders from the webpage.
  Backend schemas designed and written from scratch, with Express API routes protected with JWT authentication.
`,
  graceShopperImage
);

const stackathon = new Project(
  "https://bug-hunt.onrender.com/",
  "https://github.com/rosalie0/Bug-Hunt",
  "Bug Hunt",
  "a singleplayer 3D web game",
  `    A solo foray into 3-D rendering on the web, this game has players collect points by clicking randomly generated insect models, with a timer feature and leaderboard where they can submit their score.
    React Three Fiber and Three.js were used to display ported 3D blender models, create 3D text, and change 2D photographs into skyboxes. 
    Redux managed state and Firebase Cloud Firestore was used for the leaderboard backend.
`,
  bugHuntImage
);

const projects = [capstone, graceShopper, stackathon];

export { projects };
export type { Project };
