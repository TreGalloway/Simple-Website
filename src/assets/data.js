import React from "react";
import { FaReact, FaCode, FaGitAlt} from "react-icons/fa";
import { SiTailwindcss, } from "react-icons/si";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block   ";
const data = {
  name: "Tre Galloway",
  title: "Frontend Dev/Content Creator",
  social: {
    github: "https://github.com/TreGalloway",
    instagram: "https://www.instagram.com/bytregalloway/",
    linkedin:"https://www.linkedin.com/in/tre-galloway-98bb0a199/",
    youtube: " https://www.youtube.com/channel/UCRQPGu1zovYhIdP86WCTKLw",
    twitter: "https://twitter.com/bytregalloway",
    email: "tre@tregalloway.com",
  },
  about: {
    title: "My Background",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. ",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "TailwindCSS",
      skillIcon: <SiTailwindcss className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    // {
    //   skillName: "Redux",
    //   skillIcon: <SiRedux className={BOOTSTRAP_FOR_SKILL_ICON} />,
    // },
     {
      skillName: "Git",
      skillIcon: <FaGitAlt className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "Crown Clothing",
      description: "💻 A E-commerce website made with React, Redux, Firebase, Styled-Components.",
      tags: [
        "ecommerce",
        "redux",
        "reactjs",
        "styled-components",
        "firebase"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
       {
      title: "RV Rental website",
      description: "🚎 A website I made for family friend with React + TailwindCSS.",
      tags: [
        "website",
        "rental",
        "React",
        "tailwindcss"
      ],
      link: "https://github.com/braydentW/braydentw"
    },
    {
      title: "Face Recongiton Brain",
      description: "🧠 Quick Project using face recognition api.",
      tags: [
        "api",
        "react",
      ],
      link: "https://github.com/braydentW/braydentw"
    },
    {
      title: "Robo Friends",
      description: "🤖 Fun Robot name search.",
      tags: [
        "api",
        "react",
      ],
      link: "https://github.com/braydentW/braydentw"
    },
 
  ]
};
export default data;
