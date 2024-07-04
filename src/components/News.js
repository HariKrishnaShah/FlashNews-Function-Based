import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import defaultImage from "./Image_not_available.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  let capFirst = (element) => {
    return element.replace(element[0], element[0].toUpperCase());
  };
  News.defaultProps = {
    category: "general",
    pageSize: "15",
  };
  News.propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();

  const updateNews = async (newPage) => {
    props.setProgress(10);
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&page=${page+newPage}&pageSize=${props.pageSize}&category=${props.category}&country=in`;
    // const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&page=${page+newPage}&pageSize=${props.pageSize}&category=${props.category}&country=in`;
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(60);
    setPage(page+newPage);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  

  const fetchMoreData = async() => {
    updateNews(1);
  
  };
  useEffect(() => {
    document.title = `${capFirst(props.category)}-Flash News`
    updateNews(0);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-center" style = {{margin:"90px 0px 20px 0px"}}>
        <strong>Top Headlines on {capFirst(props.category)}</strong>
      </h1>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You have reached the end of this page !</b>
          </p>
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={
                      element.description != null
                        ? element.description.slice(0, 120) + "..."
                        : ""
                    }
                    imageUrl={
                      element.urlToImage != null
                        ? element.urlToImage
                        : defaultImage
                    }
                    newsUrl={element.url}
                    author={element.author}
                    publishedTime={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
