import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 lg:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8">
          <div className="text-center flex xl:w-[35vw] flex-col lg:text-left mb-4 xl:mb-0 xl:mt-0 mt-8">
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2 lg:text-[52px] md:text-[38px] md:mt-8">
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="mb-4 md:text-[16px] max-w-[400px] mx-auto lg:mx-0">
              Here are few projects I&apos;ve worked on recently.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full lg:max-w-[65%]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
