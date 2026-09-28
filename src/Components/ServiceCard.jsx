import React from "react";
import { useState } from "react";

const ServiceCard = ({ service, index }) => {
  return (
    <div
      key={index}
      className="flex items-center gap-6 p-6 rounded-xl bg-gray-50 border border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg"
    >
      {/* Left: Icon */}
      <div className="shrink-0 bg-gray-100 dark:bg-gray-800 rounded-full p-3">
        <img src={service.icon} alt="" className="w-16 h-16 rounded-full" />
      </div>

      {/* Right: Title + Description */}
      <div>
        <h2 className="font-bold text-lg">{service.title}</h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
      </div>
    </div>
  );
};
export default ServiceCard;
