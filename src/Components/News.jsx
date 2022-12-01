import React, { Component } from "react";
import Heading from "./Heading";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){
    let api = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=28175a33e81f42988a6260df7f5b6776&q=football";
    let data = await fetch(api);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div>
       
        <div className="row justify-content-md-center">
        <div className="col-md-8"><Heading/></div>
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-8" id={element.source.id}>
                
                <NewsItem
                  title={element.title?element.title.slice(0,82):""}
                  desc={element.description?element.description.slice(0,135):""}
                  myUrl={!element.urlToImage?"https://sportshub.cbsistatic.com/i/r/2022/11/29/565c934c-e390-4c43-9ad1-c78354e59350/thumbnail/1200x675/e8aefc11d9aaf725daf62f42d8f23611/gettyimages-1445285410.jpg":element.urlToImage}
                  date={element.publishedAt}
                  author={element.author}
                  newsUrl ={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
//Api Key
//28175a33e81f42988a6260df7f5b6776
