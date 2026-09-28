import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const servicesData = [
    {
      title: "Advirtising",
      description:
        "we turn bold ideas into powerful digital solution that connect,engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Connect marcketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writting",
      description:
        "We help you to create marcket strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "We help you to bulid a strong social media pressnt engage with your audience",
      icon: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30  text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc="From strategy to execution , we craft digital solutions that move your business forward"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
