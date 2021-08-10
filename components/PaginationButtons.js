import { useRouter } from "next/router";
import Link from "next/link";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  // 0 10 20 30 40 50 ... 100
  const firstPage = startIndex < 10;
  return (
    <div className="flex max-w-lg text-blue-700 mb-10">
      <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
        <div
          className={`flex flex-grow flex-col items-center cursor-pointer hover:underline ${
            firstPage && "text-gray-500 pointer-events-none"
          }`}
        >
          <ChevronLeftOutlinedIcon className="h-5" />
          <p>Previous</p>
        </div>
      </Link>

      <div className="flex space-x-2 items-end">
        <p className={`${startIndex == 0 ? "text-black" : "link"}`}>1</p>
        <p className={`${startIndex == 10 ? "text-black" : "link"}`}>2</p>
        <p className={`${startIndex == 20 ? "text-black" : "link"}`}>3</p>
        <p className={`${startIndex == 30 ? "text-black" : "link"}`}>4</p>
        <p className={`${startIndex == 40 ? "text-black" : "link"}`}>5</p>
        <p className={`${startIndex == 50 ? "text-black" : "link"}`}>6</p>
        <p className={`${startIndex == 60 ? "text-black" : "link"}`}>7</p>
        <p className={`${startIndex == 70 ? "text-black" : "link"}`}>8</p>
        <p className={`${startIndex == 80 ? "text-black" : "link"}`}>9</p>
        <p className={`${startIndex == 90 ? "text-black" : "link"}`}>10</p>
      </div>
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightOutlinedIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
