import React, { useState } from "react";
import Head from "next/head";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Filter from "../components/filters";
import Jobs from "../components/jobsContent";
import Search from "../components/search";

export default function Home() {
  const [searchText, setSearchText] = useState(null);

  return (
    <div class="w-full min-h-screen bg-gray-200">
      <Head>
        <title>Clipboard Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Search setSearchText={setSearchText} />
      <div class="flex flex-row xl:m-4 h-auto">
        <Filter />
        <Jobs searchText={searchText} />
      </div>
      <Footer />
    </div>
  );
}
