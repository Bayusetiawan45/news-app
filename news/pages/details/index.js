import Router, { withRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import axios from "axios";
import Footer from "../../components/footer";
import NewsSimilar from "../../components/newsSimilar";

function NewsDetails(props) {
  const {
    router: {
      query: { title },
    },
  } = props;

  const [state, setState] = useState({
    title: title,
  })

  const [articles, setArticles] = useState([]);
  const [dataDetails, setDataDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSimilarClick = (title) => {
    setState(prev => ({...prev, title: title}))
  };
  const getData = async () => {
    try {
      setIsLoading(true);
      const results = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=88aba45df35643d4b38f60d8e6c8fb2c&q=${state.title}`
      );
      if (results.data.status === "ok") {
        setDataDetails(results.data.articles[0]);
        getDataSimilarNews()
      } else {
        throw new Error("error");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const getDataSimilarNews = async () => {
    try {
      setIsLoading(true);
      const results = await axios.get(
        `https://newsapi.org/v2/top-headlines?pageSize=2&country=us&apiKey=88aba45df35643d4b38f60d8e6c8fb2c`
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
    if (!title) {
      Router.push({
        pathname: "/",
      });
    }
    getData();
  }, [state.title]);

  return (
    <div className="container mx-auto px-4 my-4 ">
      <Header />
      <div class="flex items-center mb-10">
        <a
          href="#"
          class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
          style={{ color: "#F67704" }}
        >
          Article
        </a>
        <svg
          class="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p className="text-xs font-medium text-gray-600">
          {dataDetails?.title}
        </p>
      </div>
      <p className="text-5xl font-normal text-gray-700 mb-10">
        {dataDetails?.title}
      </p>
      <div className="flex mb-10">
        <p className="text-lg font-medium text-gray-600 mr-4">
          Di post oleh {dataDetails?.author} - {dataDetails?.publishedAt}
        </p>
        <svg
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1739 7.19408V3L22 10.1299L14.1739 17.2599V13.0658C14.1739 13.0658 12 12.6464 8.08696 14.324C4.17391 16.0016 2 18 2 18C2 18 2.86956 13.1497 6.78261 10.1299C10.6957 7.1102 14.1739 7.19408 14.1739 7.19408Z"
            stroke="#F67704"
            stroke-width="2"
          />
        </svg>
      </div>
      <img
        src={dataDetails?.urlToImage ?? "./altImage.svg"}
        className="rounded-xl mb-10"
      />
      <p className="text-gray-700  mb-10">{dataDetails?.description}</p>
      <p className="text-gray-700  mb-10">{dataDetails?.content}</p>
      <p className="text-gray-500  mb-2">Tag</p>
      <p className="text-gray-700  mb-10">#ship #shipping #world</p>
      <p className="text-gray-500  mb-2">Keyworld</p>
      <p className="text-gray-700  mb-20">ship save prority</p>
      <p className="text-5xl font-normal text-gray-700 mb-10">Similar</p>
      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-20 ">
        {isLoading
          ? console.log("loading...")
          : articles.slice(0,2).map((article, index) => {
              return (
                <div key={index}>
                  <NewsSimilar onClick={handleSimilarClick} data={article} />
                </div>
              );
            })}
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(NewsDetails);
