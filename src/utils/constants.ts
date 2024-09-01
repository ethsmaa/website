import Particles, { IParticlesProps } from "@tsparticles/react";

export const particleConfig: IParticlesProps["options"] = {
  fpsLimit: 120,
  interactivity: {
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

export const menuElements = [
  {
    href: "#skills",
    title: "skills",
  },
  {
    href: "#projects",
    title: "projects",
  },
  {
    href: "#contact",
    title: "contact",
  },
];

export const SocialsData = [
  {
    name: "X",
    src: "/icons/x-logo.svg",
    height : 26,
    width : 26,
    href: "https://twitter.com/eesmaoruc",
  
  },
  {
    name: "Github",
    src: "/icons/github-fill.svg",
    height : 30,
    width : 30,
    href: "https://github.com/ethsmaa",
  
  },
 
  {
    name: "Instagram",
    src: "/icons/instagram-line.svg",
    height : 30,
    width : 30,
    href: "https://www.instagram.com/esma0ruc/",
  },
];

export const SkillsData = [
  {
    name: "JavaScript",
    Image: "/icons/js.svg",
    width: 30,
    height: 30,
  },
  {
    name: "TypeScript",
    Image: "/icons/typescript.svg",
    width: 30,
    height: 30,
  },
  {
    name: "React",
    Image: "/icons/react.svg",
    width: 30,
    height: 30,
  },
  {
    name: "Tailwind Css",
    Image: "/icons/tailwind-css.svg",
    width: 30,
    height: 30,
  },
  {
    name: "Html",
    Image: "/icons/html.svg",
    width: 30,
    height: 30,
  },
  {
    name: "Css",
    Image: "/icons/css.svg",
    width: 30,
    height: 30,
  },
  {
    name: "Figma",
    Image: "/icons/figma.svg",
    width: 30,
    height: 30,
  },
  {
    name: "Java",
    Image: "/icons/java.svg",
    width: 20,
    height: 20,
  },
];

export const ProjectsData = [
  {
    title: "drawing app",
    imgUrl: "/images/draw.png",
    description: "this JavaScript project defines a basic drawing application using an HTML canvas, allowing users to choose tools, adjust brush size and color, draw, and clear the canvas.",
    link: "https://ethsmaa.github.io/drawing-app/",
    width : 300,
    height : 300,
  },
  {
    title: "expenses chart",
    imgUrl: "/images/expenses-chart.png",
    description : 'this JavaScript project is a Frontend Mentor challenge. It fetches data from a JSON file, utilizes Chart.js to create a bar chart, and emphasizes the bar with the highest amount.',
    link: "https://ethsmaa.github.io/expenses-chart-component-main/",
    width: 300,
    height: 300,
  },
  {
    title: "todo app",
    imgUrl: "/images/todo.png",
    description: "a simple todo app that needs further development.",
    link: "https://github.com/ethsmaa/MobileTodoApp",
    width: 300,
    height: 300,  
  },
]
