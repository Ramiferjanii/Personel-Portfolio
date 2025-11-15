"use client";

import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function SkillsLayoutGrid() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={skillCards} />
    </div>
  );
}

const ProgrammingLanguages = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Programming Languages
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        JavaScript, TypeScript, Python, Java, SQL
      </p>
    </div>
  );
};

const FrontendSkills = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Frontend Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        React, Next.js, React Native, Expo, Redux, HTML5, CSS3, Tailwind CSS, Material-UI, Responsive Design
      </p>
    </div>
  );
};

const BackendSkills = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Backend Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Node.js, Express, REST APIs, Symfony
      </p>
    </div>
  );
};

const DatabaseSkills = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Databases & ORMs
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        MongoDB, MySQL, Supabase, Appwrite
      </p>
    </div>
  );
};

const ToolsPlatforms = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Tools & Platforms
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Git, GitHub, CI/CD, Vercel, Netlify, Webpack, Power BI, Firebase
      </p>
    </div>
  );
};

const DataScienceAI = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Data Science & AI
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Pandas, NumPy, Matplotlib, Seaborn, Exploratory Data Analysis, Machine Learning, Deep Learning
      </p>
    </div>
  );
};

const skillCards = [
  {
    id: 1,
    content: <ProgrammingLanguages />,
    className: "md:col-span-2",
    thumbnail: "/skills/programming-languages.png",
  },
  {
    id: 2,
    content: <FrontendSkills />,
    className: "col-span-1",
    thumbnail: "/skills/frontend-development.png",
  },
  {
    id: 3,
    content: <BackendSkills />,
    className: "col-span-1",
    thumbnail: "/skills/backend-development.png",
  },
  {
    id: 4,
    content: <DatabaseSkills />,
    className: "md:col-span-2",
    thumbnail: "/skills/databases-orms.png",
  },
  {
    id: 5,
    content: <ToolsPlatforms />,
    className: "col-span-1",
    thumbnail: "/skills/tools-platforms.png",
  },
  {
    id: 6,
    content: <DataScienceAI />,
    className: "col-span-1",
    thumbnail: "/skills/data-science-ai.png",
  },
];

