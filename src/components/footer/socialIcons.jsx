import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-gray-100">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-primary text-black mx-1.5 text-xl hover:translate-y-1
        duration-300 "
        >
          <a href={icon.link}>{icon.component}</a>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;