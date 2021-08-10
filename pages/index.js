import { SearchOutlined } from "@material-ui/icons";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MicIcon from "@material-ui/icons/Mic";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const searchInput = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = searchInput.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow w-4/5">
        <form className="flex flex-col items-center mt-44" onSubmit={search}>
          <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            width={273}
            height={92}
          />
          <div className="flex w-full my-6 hover:shadow-md focus-within:shadow-md  max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
            <SearchOutlined className="text-gray-400 " />
            <input
              type="text"
              className="focus:outline-none flex-grow pl-3"
              ref={searchInput}
            />
            <MicIcon className="text-blue-500" />
          </div>

          <div className="flex flex-col w-1/2 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-2">
            <button className="button" onClick={search}>
              Google Search
            </button>
            <button className="button" onClick={search}>
              I'm Feeling Lucky
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
