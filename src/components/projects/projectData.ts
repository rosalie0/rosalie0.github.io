class Project {
  deployLink: string;
  githubLink: string;
  title: string;
  description: string;

  constructor(
    deployLink: string,
    githubLink: string,
    title: string,
    description: string
  ) {
    this.deployLink = deployLink;
    this.githubLink = githubLink;
    this.title = title;
    this.description = description;
  }
}

const capstone = new Project(
  "https://codenames-0nt7.onrender.com/",
  "https://github.com/2208-Capstone-Team-2/codenames",
  "Codenames",
  `A fullstack web app of the party game Codenames. Built from scratch & written in TypeScript with an emphasis on seamless user experience.
Backend Sequelize models and API routes for user creation, room generation & randomized card layouts.
Firebase Realtime Database as a socket and NoSQL database for synchronized gameplay across all players' screens
CSS for responsive mobile & tablet designs.
`
);
const graceShopper = new Project(
  "https://comic-overflow.onrender.com/",
  "https://github.com/2208-GS-Team-1/Comic-Overflow",
  "Comic Overflow",
  `Comic Overflow is a basic e-commerce web application. Books of varying quantity can be added, edited, and removed from a user’s cart, which persists upon reload.
Guests can create an account to store information and place orders via integrated Stripe API.
Backend schemas designed and written from scratch, with Express API routes protected with JWT authentication.
`
);

const stackathon = new Project(
  "https://bug-hunt.onrender.com/",
  "https://github.com/rosalie0/Bug-Hunt",
  "Bug Hunt",
  `A point-and-click game using 3D rendering on the web. Players collect points by clicking randomly generated insect models, with a timer feature and leaderboard where they can submit their score.
React Three Fiber and Three.js were used to display ported 3D blender models, create 3D text, and change 2D photographs into skyboxes. 
Redux managed state and Firebase Cloud Firestore was used for the leaderboard backend.
`
);
const projects = [capstone, graceShopper, stackathon];

export { projects };
