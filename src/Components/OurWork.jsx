import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile App Marketing",
      description:
        "A modern mobile app marketing campaign designed to increase visibility, engagement, and user growth.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description:
        "A clean and intuitive management dashboard for monitoring data, tracking performance, and managing business operations.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotion",
      description:
        "An engaging promotional experience created to showcase fitness features and attract new users to the app.",
      image: assets.work_fitness_app,
    },
  ];
  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30   text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution , we craft digital solutions that move your business forward"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl ">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-300 transition-all cursor-pointer  rounded-2xl dark:bg-gray-900 "
          >
            <img src={work.image} alt="" className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-semibold pl-3">
              {work.title}
            </h3>
            <p className="text-sm opacity-60 w-5/6 pl-3 mb-8">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
