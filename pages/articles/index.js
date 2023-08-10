import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { RxArrowTopRight } from "react-icons/rx";
import WorkSlider from "../../components/WorkSlider";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const articlesData = [
    {
        id: 1,
        attributes: {
            title: "The Ultimate Guide to Styling Next.js Apps with Tailwind CSS",
            createdAt: "2023-08-08T05:34:59.017Z",
            updatedAt: "2023-08-08T05:35:12.912Z",
            publishedAt: "2023-08-08T05:35:12.907Z",
            content: `This is content.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut delectus voluptas illo, odio quisquam nulla earum, sed consectetur unde, consequatur ipsa laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a, dignissimos modi assumenda eius odio nostrum, esse optio incidunt consequatur exercitationem nulla amet.`,
            tags: "#NextJs #TailwindCSS #How-to-guide"
        }
    },
    {
        id: 2,
        attributes: {
            title: "The Ultimate Guide to Styling Next.js Apps with Tailwind CSS",
            createdAt: "2023-08-08T05:34:59.017Z",
            updatedAt: "2023-08-08T05:35:12.912Z",
            publishedAt: "2023-08-08T05:35:12.907Z",
            content: `This is content.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut delectus voluptas illo, odio quisquam nulla earum, sed consectetur unde, consequatur ipsa laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a, dignissimos modi assumenda eius odio nostrum, esse optio incidunt consequatur exercitationem nulla amet.`,
            tags: "#NextJs #TailwindCSS #How-to-guide"
        }
    }
]
const Articles = () => {
    return (
        <div className=" h-full bg-primary/30 py-36 flex items-center">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    <div className="text-center flex xl:w-[35vw] flex-col lg:text-left mb-4 xl:mb-0">
                        <motion.h2
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className="h2 xl:mt-8">
                            My articles <span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                            Check out my articles where I write about my project accomplishments and how-to-guides.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="h-[320px] sm:h-[480px]"
                    >
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                                <div className="flex items-center justify-center relative overflow-hidden group">
                                    <Image src={'/thumb1.jpg'} width={500} height={300} alt="" />
                                    <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                    <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-20 transition-all duration-300">
                                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                            <div className="delay-100">
                                                Read
                                            </div>
                                            <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300">
                                                article
                                            </div>
                                            <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                                <div className="flex items-center justify-center relative overflow-hidden group">
                                    <Image src={'/thumb1.jpg'} width={500} height={300} alt="" />
                                    <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                    <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-20 transition-all duration-300">
                                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                            <div className="delay-100">
                                                Read
                                            </div>
                                            <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300">
                                                article
                                            </div>
                                            <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                                <div className="flex items-center justify-center relative overflow-hidden group">
                                    <Image src={'/thumb1.jpg'} width={500} height={300} alt="" />
                                    <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                    <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-20 transition-all duration-300">
                                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                            <div className="delay-100">
                                                Read
                                            </div>
                                            <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300">
                                                article
                                            </div>
                                            <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                                <div className="flex items-center justify-center relative overflow-hidden group">
                                    <Image src={'/thumb1.jpg'} width={500} height={300} alt="" />
                                    <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                    <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-20 transition-all duration-300">
                                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                            <div className="delay-100">
                                                Read
                                            </div>
                                            <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300">
                                                article
                                            </div>
                                            <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Articles;