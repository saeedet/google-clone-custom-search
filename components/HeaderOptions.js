import React from "react";
import HeaderOption from "./HeaderOption";
import { SearchOutlined } from "@material-ui/icons";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";

function HeaderOptions() {
  return (
    <div className="flex w-full justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* Left section */}

      <div className="flex space-x-6">
        <HeaderOption Icon={SearchOutlined} title="All" selected />
        <HeaderOption Icon={RoomOutlinedIcon} title="Maps" />
        <HeaderOption Icon={ImageOutlinedIcon} title="Images" />
        <HeaderOption Icon={DescriptionOutlinedIcon} title="News" />
        <HeaderOption Icon={VideoLibraryOutlinedIcon} title="Videos" />
        <HeaderOption Icon={MoreVertOutlinedIcon} title="More" />
      </div>

      {/* Right section */}
      <div className=" flex space-x-4 items-center">
        <p className="hover:bg-[#f8f9fa] px-2 mb-[15px] hover:shadow-sm active:shadow-inner  cursor-pointer border-[1px] border-transparent hover:border-[#dadce0] text-[#5f6368]">
          Tools
        </p>
      </div>
    </div>
  );
}

export default HeaderOptions;
