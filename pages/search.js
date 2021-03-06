import React from "react";
import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import { useRouter } from "next/dist/client/router";
import SearchResults from "../components/SearchResults";
import Response from "../Response";
import Footer from "../components/Footer";

const { GOOAPI_KEY, CONTEXT_KEY } = process.env;

function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchHeader term={router.query.term} />
      <SearchResults results={results} />
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${GOOAPI_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
