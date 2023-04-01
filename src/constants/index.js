import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    netflix,
    amazon,
    shopify,
    upwork,
    carrent,
    mabledashboard,
    netflixclone,
    amazonclone,
    adminkanban,
    jobit,
    tripguide,
    threejs,
    mableticketdetail,
    mablelogo,
    logocolor,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Flutter Developer",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "March 2022 - November 2022",
      points: [
        "Designed multiple frontend pages using Dart",
        "Worked with a team of remote developers to assist with backend logic and functionality",
        "Utilized flutter_charts, charts_flutter, etc, to visualize user input data",
        "Participated in daily standups and meetings",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Mable",
      icon: logocolor,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Netflix",
      icon: netflix,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Built a perfect replica of Netflix's frontend using industry design principles.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Built a perfect replica of Amazon's frontend using industry design principles.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Miko was an excellent communicator, terrific in understanding the problem at hand and providing an elegantly simple solution.",
      name: "Ron Ramirez",
      designation: "Lead Developer",
      company: "Upwork",
      image: upwork,
    },
    {
      testimonial:
        "Miko had gone above and beyond to support needed changes during the development.",
      name: "Ron Ramirez",
      designation: "Lead Developer",
      company: "Upwork",
      image: upwork,
    },
    {
      testimonial:
        "I will definitely be reaching out to Miko again in the near future for any problems that our company may come across.",
      name: "Ron Ramirez",
      designation: "Lead Developer",
      company: "Upwork",
      image: upwork,
    },
  ];
  
  const projects = [
    {
      name: "Mable",
      description:
        "Web application that allows teams or individuals to assign tasks, manage users, and supervise projects on an industrial scale. Bring your business ideas to life with Mable.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: adminkanban,
      source_code_link: "http://admin-kanban.42web.io/",
    },
    {
      name: "Netflix Clone",
      description:
        "Perfect replica of Netflix's frontend design that is connected to IMDBAPI to generate the movie lists and categories",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "imdbapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: netflixclone,
      source_code_link: "http://flixnet.great-site.net/",
    },
    {
      name: "Amazon Clone",
      description:
        "Perfect replica of Amazon's frontend design that is connected to FakestoreAPI to generate the shopping item lists and categories",
      tags: [
        {
          name: "vitejs",
          color: "blue-text-gradient",
        },
        {
          name: "fakestoreapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: amazonclone,
      source_code_link: "http://nile.lovestoblog.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };