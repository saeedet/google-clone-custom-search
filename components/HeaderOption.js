import React from "react";

function HeaderOption({ title, Icon, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-[3px] border-transparent cursor-pointer pb-3 ${
        selected ? " text-blue-500 border-blue-500" : "text-gray-500"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
