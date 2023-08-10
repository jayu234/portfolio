import React, { useState } from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa"

import { SiAdobephotoshop, SiCanva, SiExpress, SiFramer, SiMongodb, SiMysql, SiNextdotjs, SiPostgresql, SiPostman, SiRedux, SiSocketdotio, SiVisualstudiocode } from "react-icons/si"
//  data

export const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Frontend',
        icons: [
          <FaHtml5 key={"html"}/>,
          <FaCss3 key={"css"}/>,
          <FaJs key={"js"}/>,
          <FaReact key={"react"}/>,
          <SiNextdotjs key={"next"}/>,
          <SiFramer key={"framer"}/>,
          <SiRedux key={"redux"}/>,
        ],
      },
      {
        title: 'Backend',
        icons: [<FaNodeJs key={"node"} />, <SiExpress key={"express"}/>, <SiSocketdotio key={"socket"}/>],
      },
      {
        title: 'Databases',
        icons: [<SiMongodb key={"mongo"}/>, <SiMysql key={"mysql"}/>, <SiPostgresql key={"postgres"}/>],
      },
      {
        title: 'Other Tools',
        icons: [<FaFigma key={"figma"}/>, <SiCanva key={"canva"}/>, <SiVisualstudiocode key={"vscode"}/>, <SiPostman key={"postman"} />],
      },
    ],
  },
  {
    title: 'Experience',
    info: [
      {
        title: 'Full Stack Developer @ Rutilant Technology',
        stage: "2023",
      },
      {
        title: 'ReactJs Intern @ Uniorec Infotech',
        stage: "2022",
      },
    ],
  },
  // {
  //   title: 'Academics',
  //   info: [
  //     {
  //       title: 'Birla Vishvakarma Mahavidyalaya, Anand Gujarat',
  //       stage: '2020 - 2024',
  //     },
  //     {
  //       title: 'Sorath International School Junagadh',
  //       stage: '2018 - 2020',
  //     },
  //   ],
  // },
];

import Circles from "../../components/Circles"
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="xl:pb-24 xl:pr-4 flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Strive to build things that make a <span className="text-accent">difference!</span>
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I am a full stack web developer. I love solving real-life problems by building meaningful solutions.
          </p>
          {/* counters */}
          {/* <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-x-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="xl:pl-8 flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => { setIndex(itemIndex) }}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-row max-w-max gap-x-2 justify-start items-center text-white/60"
                >
                  <div className="font-medium mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
