import Router, { withRouter } from "next/router";
import { useEffect } from "react";

function NewsDetails(props) {
  const {
    router: {
      query: { title },
    },
  } = props;

  useEffect(() => {
    if (!title) {
      Router.push({
        pathname: "/",
      });
    }
  }, []);

  console.log("router", title);
  return (
    <div className="container mx-auto px-4 my-4">
      <h1>halo gan {title}</h1>
    </div>
  );
}

export default withRouter(NewsDetails);
