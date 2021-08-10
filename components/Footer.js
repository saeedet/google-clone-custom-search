import React from "react";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-md text-gray-500">
      <div className="px-8 py-3 flex justify-between">
        <p>Australia</p>
        <p>
          Designed by{" "}
          <a href="https://www.saeedet.com" className="link text-blue-600">
            SaEeD ET
          </a>
        </p>
      </div>
      <div className="flex flex-wrap px-2">
        <div className="flex flex-grow justify-center">
          <p className="link py-2 px-3">Advertising</p>
          <p className="link py-2 px-3">Business</p>
          <p className="link py-2 px-3">How Search works</p>
        </div>
        <div className="flex flex-grow justify-center">
          <p className="link py-2 px-3">Privacy</p>
          <p className="link py-2 px-3">Terms</p>
          <p className="link py-2 px-3">Setting</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
