import React from "react";
import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
// import { API_KEY, CONTEXT_KEY } from "../keys";
import { useRouter } from "next/dist/client/router";
import SearchResults from "../components/SearchResults";
import Response from "../Response";
import Footer from "../components/Footer";

function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchHeader />
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
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
