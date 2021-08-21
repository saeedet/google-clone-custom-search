import React from "react";
import Avatar from "./Avatar";
import AppsIcon from "@material-ui/icons/Apps";

function Header() {
  return (
    <header className="flex justify-between px-5 py-2 text-sm w-full">
      {/* left section */}
      <div className="flex space-x-4  items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      {/* right section */}
      <div className="flex space-x-4  items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <div className="iconContainer">
          <AppsIcon className="cursor-pointer text-gray-500  " />
        </div>
        <div className="iconContainer">
          <Avatar url="http://saeedet.com/images/profilepic.JPG" />
        </div>
      </div>
    </header>
  );
}

export default Header;
