"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

const LeetCode = () => {
  const item = {
    iconLists: ["/Python.png"],
    img: "/p2.svg",
  };
  return (
    <div className=" flex items-center justify-center ">
      <PinContainer title={"2024"}>
        <Link
          href={"https://github.com/AnugyaSahu/LeetCode-Problems"}
          target="_blank"
        >
          <div className="flex flex-row gap-6 justify-center items-center">
            <div className="relative flex items-center justify-center sm:w-72 w-[80vw] overflow-hidden h-[17vh] lg:h-[25vh]">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/bg.png" alt="bgimg" />
              </div>
              <img
                src={"/LC.png"}
                alt="cover"
                className="z-10 h-full absolute bottom-0 rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold lg:text-xl md:text-l text-base line-clamp-1">
                {"LeetCodeSolutions with Python"}
              </h1>

              <p
                className="lg:text-l lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {
                  "Solution for LeetCode Data Structures and Algorithms problems with Python-3"
                }
              </p>

              <div className="flex items-center justify-between mt-11 ">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
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
            </div>
          </div>
        </Link>
      </PinContainer>
    </div>
  );
};

export default LeetCode;
