"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Typescript </li>
        <li>React</li>
        <li> Nest.JS </li>
        <li> Node.JS</li>
        <li> NextJS</li>
        <li>MongoDB </li>
        <li>SQL </li>
        <li>GraphQL</li>
        <li>Python </li>
        <li>GIT </li>
        <li>Django</li>
        <li>Flask</li>
        <li>Neural Networks and AI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>Fullstack Web Development Bootcamp</li>
          <li>Kenzie Academy</li>
        </ul>
        <br />
        <ul className="list-disc pl-2">
          <li>Cybersecurity</li>
          <li>Estacio de Sá University (BR)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A table with an illustration of a computer with software editing programs open"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a versatile full-stack web developer skilled in TypeScript,
            React, Nest.js, Node.js, Next.js, MongoDB, SQL, GraphQL, Python, and
            Git. With expertise in Django, Flask, and AI technologies, I bring a
            dynamic approach to application development. My commitment to
            interactive and responsive design, combined with a collaborative
            spirit, makes me an asset to any team.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
