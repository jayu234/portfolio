import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { BsArrowRight, BsGithub, BsLink } from 'react-icons/bs'
import Image from "next/image";
import Link from "next/link";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'CampusConnect',
          path: '/campusconnect.png',
          link: {
            github: "https://github.com/jayu234/campus-connect",
            demo: "https://campus-connect-1fq8.onrender.com/",
          },
        },
        {
          title: 'ExpenseTracker',
          path: '/expense-tracker.png',
          link: {
            github: "https://github.com/jayu234/expense-tracker-redux-project-1",
            demo: "https://money-trackerr.netlify.app/",
          },
        },
        {
          title: 'Memories',
          path: '/memories.png',
          link: {
            github: "https://github.com/jayu234/memories",
            demo: "https://memories-ten-pi.vercel.app/",
          },
        },
        {
          title: 'eNotebook',
          path: '/e-notebook.png',
          link: {
            github: "https://github.com/jayu234/eNotebook-frontend-MERN-Project-1",
            demo: "https://my-enotebook.netlify.app/",
          },
        },
      ],
    },
    {
      images: [
        {
          title: 'iNewsPaper',
          path: '/inewspaper.png',
          link: {
            github: "https://github.com/jayu234/iNewspaper-React-Project-2",
            demo: "https://inewspaper.onrender.com/"
          },
        },
        {
          title: 'TextUtils',
          path: '/textutils.png',
          link: {
            github: "https://github.com/jayu234/TextUtils-React-Project-1",
            demo: "https://jayu234.github.io/TextUtils-React-Project-1/"
          },
        }
      ],
    },
  ],
};


const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[440px]"
    >
      {
        workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {slide.images.map((image, index) => {
                  return (
                    <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image src={image.path} width={500} height={300} alt="" />
                        <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100 text-xl cursor-pointer">
                              <Link target="_blank" rel="noopener noreferrer" href={image.link.github}><BsGithub/></Link>
                            </div>
                            <div className="text-xl mx-4 cursor-pointer translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300">
                              <Link target="_blank" rel="noopener noreferrer" href={image.link.demo}><BsLink/></Link>
                            </div>
                            {/* <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight/></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default WorkSlider;
