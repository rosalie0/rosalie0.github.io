class Project {
  link: string;
  title: string;
  description: string;

  constructor(link: string, title: string, description: string) {
    this.link = link;
    this.title = title;
    this.description = description;
  }
}

const capstone = new Project("www", "Codenames", `desc...`);
const graceShopper = new Project("www2", "Comic Overflow", `desc...`);
const projects = [capstone, graceShopper];

export { projects };
