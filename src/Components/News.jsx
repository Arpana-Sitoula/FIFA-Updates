import React, { Component } from "react";
import Heading from "./Heading";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    let api = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=28175a33e81f42988a6260df7f5b6776&q=football&pageSize=4&page=1";
    let data = await fetch(api);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles , totalArticles: parsedData.totalResults})
  }

  //pagination logic goes here:
   prevPage = async() =>{
 // console.log("prev");
  let api = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=28175a33e81f42988a6260df7f5b6776&q=football&pageSize=4&page=${this.state.page-1}`;
    let data = await fetch(api);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
                   articles: parsedData.articles,
                   page: this.state.page-1
                  })
 
  
  }
  nextPage = async() =>{
  //console.log("next");
  if(this.state.page+1>Math.ceil(this.state.totalArticles/4)){

  }
  else{
    let api = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=28175a33e81f42988a6260df7f5b6776&q=football&pageSize=4&page=${this.state.page+1}`;
      let data = await fetch(api);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
              articles: parsedData.articles,
              page: this.state.page+1
        })
  }
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
          
        
  <ul className="pagination  justify-content-center">
    <li className="page-item">
      <button className="page-link text-info" disabled={this.state.page<=1} onClick={this.prevPage}>
       &laquo; 
      </button>
    </li>
    <li className="page-item">
      <button className="page-link text-info"  disabled={false} onClick={this.nextPage}>
        &raquo;
      </button>
    </li>
  </ul>
          </div>
        </div>
      
    );
  }
}
//Api Key
//28175a33e81f42988a6260df7f5b6776