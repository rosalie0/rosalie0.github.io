import codenamesImage from "../../assets/projects/codenames-preview700.png";
import graceShopperImage from "../../assets/projects/grace-shopper-preview700.png";
import bugHuntImage from "../../assets/projects/bug-hunt-preview700.png";

// low res
import codenamesImageTiny from "../../assets/projects/tiny/codenames-2.png";
import graceShopperImageTiny from "../../assets/projects/tiny/grace-shopper-preview700.png";
import bugHuntImageTiny from "../../assets/projects/tiny/bug-hunt-preview700.png";

class Project {
  title!: string;
  subtitle?: string;
  description!: string;
  image!: string;
  deployLink?: string;
  githubLink?: string;
  videoLink?: string;

  constructor(data: Partial<Project>) {
    Object.assign(this, data);
  }
}

const capstone = new Project({
  deployLink: "https://codenames-0nt7.onrender.com/",
  githubLink: "https://github.com/2208-Capstone-Team-2/codenames",
  videoLink: "https://www.youtube.com/watch?v=nMLCx3XAIkE",
  title: "Codenames",
  subtitle: "an online multiplayer card game",
  description: ` Written in typescript with a blend of firebase & SQL for backend.
    Features synchronized gameplay across all players' screens, responsive design, and user chat box for a seamless user experience. 
    Created by a team of five members, over the course of 6 weeks.
    `,
  image: codenamesImageTiny,
});

const graceShopper = new Project({
  deployLink: "https://comic-overflow.onrender.com/",
  githubLink: "https://github.com/2208-GS-Team-1/Comic-Overflow",
  videoLink: "https://www.youtube.com/watch?v=rbbKldsF4Gw",
  title: "Comic Overflow",
  subtitle: "an e-commerce site",
  description: `   Comic Overflow is an e-commerce platform for comic book enthusiasts built over the course of a 2.5 week period in a team of four.
    Features include a from-scratch backend schema, account creation & authentication, persistent user cart, Stripe API checkout, and admin view that lets website owners add and delete products and orders from the webpage.
    Backend schemas designed and written from scratch, with Express API routes protected with JWT authentication.
    `,
  image: graceShopperImageTiny,
});

const stackathon = new Project({
  deployLink: "https://bug-hunt.onrender.com/",
  githubLink: "https://github.com/rosalie0/Bug-Hunt",
  title: "Bug Hunt",
  subtitle: "a singleplayer 3D web game",
  description: `    A solo foray into 3-D rendering on the web, this game has players collect points by clicking randomly generated insect models, with a timer feature and leaderboard where they can submit their score.
    React Three Fiber and Three.js were used to display ported 3D blender models, create 3D text, and change 2D photographs into skyboxes.
    Redux managed state and Firebase Cloud Firestore was used for the leaderboard backend.
    `,
  image: bugHuntImageTiny,
});

const projects = [capstone, graceShopper, stackathon];

export { projects };
export type { Project };
