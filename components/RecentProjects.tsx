"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects2 } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import LeetCode from "./LeetCode";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <LeetCode />
      <h2 className="text-2xl ml-32 mt-10">
        <span className="text-purple ">2024</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 ">
        {projects2[2024].map((item) => (
          <div
            className="lg:min-h-[28rem] h-[22rem] flex items-center justify-center sm:w-72 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.year}>
              <Link
                href={item.live || "https://github.com/anugyasahu"}
                target="_blank"
              >
                <div className="relative flex items-center justify-center sm:w-72 w-[80vw] overflow-hidden h-[17vh] lg:h-[25vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-xl object-cover w-full h-full"
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-l text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-l lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-l md:text-xs text-sm text-purple">
                      View Project
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
      <h2 className="text-2xl ml-32 mt-10">
        <span className="text-purple ">2023</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects2[2023].map((item) => (
          <div
            className="lg:min-h-[28rem] h-[22rem] flex items-center justify-center sm:w-72 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.year}>
              <Link
                href={item.live || "https://github.com/anugyasahu"}
                target="_blank"
              >
                <div className="relative flex items-center justify-center sm:w-72 w-[80vw] overflow-hidden h-[17vh] lg:h-[25vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-xl object-cover w-full h-full"
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-l text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-l lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-l md:text-xs text-sm text-purple">
                      View Project
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
      <h2 className="text-2xl ml-32 mt-10">
        <span className="text-purple ">2022</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects2[2022].map((item) => (
          <div
            className="lg:min-h-[28rem] h-[22rem] flex items-center justify-center sm:w-72 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.year}>
              <Link
                href={item.live || "https://github.com/anugyasahu"}
                target="_blank"
              >
                <div className="relative flex items-center justify-center sm:w-72 w-[80vw] overflow-hidden h-[17vh] lg:h-[25vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-xl object-cover w-full h-full"
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-l text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-l lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-l md:text-xs text-sm text-purple">
                      View Project
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="flex justify-center relative  z-10">
        <a target="_blank" href="https://github.com/AnugyaSahu">
          <MagicButton
            title="Show all projects"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
