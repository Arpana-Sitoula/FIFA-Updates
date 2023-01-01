import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Loading from "./Loading";
import NewsItem from "./NewsItem";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalRes, setTotalRes] = useState(0);
 


  const updateNews = async () => {
    props.setProgress(0);
    let api = `https://newsapi.org/v2/top-headlines?category=sports&language=${props.language}&apiKey=${props.apiKey}&pageSize=5&page=${page}&q=football`;
    setLoading(true);
    let data = await fetch(api);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    console.log(api);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalRes(parsedData.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
  }, []);


  //pagination logic goes here:
  const prevPage = async () => {
    setPage(page - 1);
    updateNews();
  };
  const nextPage = async () => {
    console.log("next");
    if (page + 1 > Math.ceil(totalRes / 5)) {
      return <p>End of the results.</p>;
    } else {
      setPage(page + 1);
      updateNews();
      console.log(page);
    }
   
  };

  return (
    <div>
      <div className="row">
        <div className="col-11">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <Heading />
            </div>
            {loading && <Loading />}
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col-md-8" id={element.source.id}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 100) : ""}
                      desc={
                        element.description
                          ? element.description.slice(0, 135)
                          : ""
                      }
                      myUrl={
                        !element.urlToImage
                          ? "https://sportshub.cbsistatic.com/i/r/2022/11/29/565c934c-e390-4c43-9ad1-c78354e59350/thumbnail/1200x675/e8aefc11d9aaf725daf62f42d8f23611/gettyimages-1445285410.jpg"
                          : element.urlToImage
                      }
                      date={element.publishedAt}
                      author={element.author}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            <ul className="pagination  justify-content-center">
              <li className="page-item">
                <button
                  className="page-link text-info"
                  disabled={page <= 1}
                  onClick={prevPage}
                >
                  &laquo;
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link text-info"
                  disabled={page + 1 > Math.ceil(totalRes / 4)}
                  onClick={nextPage}
                >
                  &raquo;
                </button>
              </li>
            </ul>
            Total Results : {totalRes}
          </div>
        </div>
      </div>
    </div>
  );
};

News.defaultProps = {
  language: "en",
};
export default News;
//Api Key
//28175a33e81f42988a6260df7f5b6776
