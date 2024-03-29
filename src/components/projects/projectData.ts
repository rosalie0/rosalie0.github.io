import codenamesImage from "../../assets/projects/codenames-preview700.png";
import graceShopperImage from "../../assets/projects/grace-shopper-preview700.png";
import bugHuntImage from "../../assets/projects/bug-hunt-preview700.png";

// low res
import codenamesImageTiny from "../../assets/projects/webp/codenames-preview700.webp";
import graceShopperImageTiny from "../../assets/projects/webp/grace-shopper-preview700.webp";
import bugHuntImageTiny from "../../assets/projects/webp/bug-hunt-preview700.webp";
class Project {
  title!: string;
  subtitle?: string;
  techStack!: string[];
  description!: string;
  image!: string;
  deployLink?: string;
  githubLink?: string;
  videoLink?: string;
  note?: string;
  constructor(data: Partial<Project>) {
    Object.assign(this, data);
  }
}

const capstone = new Project({
  title: "Codenames",
  subtitle: "an online multiplayer card game",
  techStack: [
    "Typescript",
    "Firebase",
    "React",
    "Redux",
    "CSS",
    "Express",
    "Sequelize",
  ],
  description: `  Online version of the popular card game, Codenames.
Features synchronized gameplay across all players' screens, responsive design, and user chat box for an engaging user experience.
  Challenges included randomized board layouts, and managing sockets and complex game logic.
  Created by a team of five members over six weeks.`,
  image: codenamesImageTiny,
  deployLink: "https://codenames-0nt7.onrender.com/",
  githubLink: "https://github.com/2208-Capstone-Team-2/codenames",
  videoLink: "https://www.youtube.com/watch?v=nMLCx3XAIkE",
  note: "The deploy may take a long time to load, please be patient.",
});

const graceShopper = new Project({
  title: "Comic Overflow",
  subtitle: "an e-commerce site",
  techStack: ["Javascript", "React", "Redux", "Express", "Sequelize"],
  description: `  Comic Overflow is an e-commerce platform for comic book enthusiasts built over the course 2.5 weeks by a team of four.
  Features include account creation & authentication, a persistent cart for both logged-in and guest users, and Stripe API checkout. Admin users are able to add, edit and delete products, orders and even other users, straight from their browser.
  API routes protected with JWT authentication.`,
  image: graceShopperImageTiny,
  deployLink: "https://comic-overflow.onrender.com/",
  githubLink: "https://github.com/2208-GS-Team-1/Comic-Overflow",
  videoLink: "https://www.youtube.com/watch?v=rbbKldsF4Gw",
  note: "The deploy may take a long time to load, please be patient.",
});

const stackathon = new Project({
  title: "Bug Hunt",
  subtitle: "a singleplayer 3D web game",
  techStack: [
    "Javascript",
    "React",
    "Three.js",
    "React Three Fiber",
    "Firebase",
  ],
  description: `  A solo foray into 3D rendering on the web, this game has players collect points by clicking randomly generated insect models, with a timer feature and leaderboard where they can submit their score.
    Features ported 3D blender models, font-based 3D text, and 2D photographs converted into skyboxes.
    Firebase Cloud Firestore was used for the leaderboard backend.`,
  image: bugHuntImageTiny,
  deployLink: "https://bug-hunt.onrender.com/",
  githubLink: "https://github.com/rosalie0/Bug-Hunt",
});

const projects = [capstone, graceShopper, stackathon];

export { projects };
export type { Project };
