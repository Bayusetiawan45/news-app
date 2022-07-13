import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";
import Pagination from "../components/pagination";
import Title from "../components/title";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";

export default function Home() {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce(search, 500);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleRouting = (title) => {
    Router.push({
      pathname: "/details",
      query: { title: title },
    });
  };

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const results = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=88aba45df35643d4b38f60d8e6c8fb2c`
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

  const getSearchData = async (title) => {
    try {
      setIsLoading(true);
      const results = await axios.get(
        `https://newsapi.org/v2/everything?q=${title}&apiKey=88aba45df35643d4b38f60d8e6c8fb2c`
      );
      console.log("RESULT", results)
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
    console.log("a", debouncedValue)
    try {
      if (debouncedValue) getSearchData(debouncedValue);
      else getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [debouncedValue]);

  return (
    <div className="container mx-auto my-4">
      <Header />
      <Title handleSearch={handleSearch}/>
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
