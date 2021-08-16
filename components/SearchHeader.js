import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { useRef } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import MicIcon from "@material-ui/icons/Mic";
import { SearchOutlined } from "@material-ui/icons";
import Avatar from "./Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HeaderOptions from "./HeaderOptions";

function SearchHeader({ term }) {
  const router = useRouter();
  const searchInput = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInput.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-col sm:flex-row w-full  items-center">
        <div className="flex w-full sm:w-auto py-3 px-6 sm:py-6 sm:pl-6 sm:pr-0 items-center justify-between">
          <div className="iconContainer sm:hidden">
            <SettingsOutlinedIcon className="cursor-pointer text-gray-800" />
          </div>
          <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={30}
            width={92}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          <div className="iconContainer sm:hidden">
            <Avatar url="http://saeedet.com/images/profilepic.jpg" />
          </div>
        </div>

        <div className="flex w-full px-6 pb-6 sm:py-6 sm:pl-0 items-center justify-center">
          <form
            onSubmit={search}
            className="flex flex-grow max-w-3xl px-6 py-3 sm:ml-10 sm:mr-5 items-center border border-gray-200 rounded-full shadow-md hover:shadow-lg"
          >
            <input
              type="text"
              ref={searchInput}
              className="flex-grow focus:outline-none"
              placeholder={term ? term : ""}
            />
            <ClearIcon
              className="text-gray-500 cursor-pointer mr-3"
              onClick={() => (searchInput.current.value = "")}
            />
            <div className="border-l h-6 border-gray-200 w-[10px] hidden sm:inline-flex" />
            <div className="hidden sm:inline-flex">
              <MicIcon className="text-blue-500" />
            </div>
            <div className="hidden sm:inline-flex">
              <SearchOutlined className="text-blue-500" onClick={search} />
            </div>

            <button hidden type="submit" onClick={search}>
              Search
            </button>
          </form>
          <div className="hidden sm:flex flex-grow justify-end ">
            <div className="iconContainer">
              <SettingsOutlinedIcon className="cursor-pointer text-gray-800" />
            </div>
            <div className="iconContainer">
              <AppsIcon className="cursor-pointer text-gray-500  " />
            </div>
            <div className="iconContainer">
              <Avatar url="http://saeedet.com/images/profilepic.jpg" />
            </div>
          </div>
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
