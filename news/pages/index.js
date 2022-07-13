import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";
import Pagination from "../components/pagination";
import Title from "../components/title";
import Router from "next/router";

export default function Home() {
  const handleRouting = (title) => {
    Router.push({
      pathname: "/details",
      query: { title: title },
    });
  };

  return (
    <div className="container mx-auto px-4 my-4">
      <Header />
      <Title />
      <div class="grid grid-cols-2 gap-6 mb-20">
        <News routes={handleRouting}/>
        <News />
        <News />
        <News />
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
