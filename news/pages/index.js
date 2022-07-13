import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";
import Pagination from "../components/pagination";
import Title from "../components/title";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleRouting = (title) => {
    Router.push({
      pathname: "/details",
      query: { title: title },
    });
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const results = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=fc2abc530bad4e0bbb35ff8c19b1e561`
      );
      if (results.data.status === "ok") {
        setArticles(results.data.articles);
      } else {
        throw new Error("error");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto my-4">
      <Header />
      <Title />
      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-20 ">
        {isLoading
          ? console.log("loading...")
          : articles.map((article, index) => {
              return (
                <div key={index}>
                  <News routes={handleRouting} data={article} />
                </div>
              );
            })}
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
