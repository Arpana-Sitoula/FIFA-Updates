import React from "react";
import './NewsItem.css';

const NewsItem = (props) => {

    var { title, desc,myUrl,date,author,newsUrl } = props;
    return (
      <div>
        <div className="styling">
        <div className="container shadow p-3 mb-5">
          <div className="row mb-2">
            <div className="col"> <strong className="d-inline-block mb-2 text-success">Sports</strong></div>
            <div className="col"><div className="mb-1">{new Date(date).toGMTString()}</div></div>
          </div>
          <div className="row ">
            <div className="col">
              <div className="row mb-3"><h4>{title}</h4></div><span className="badge bg-secondary">New</span>
              <div className="row"> <p className="card-text mb-auto">{desc}</p></div>
            </div>
            <div className="col">
            <img style ={{height: "190px", width: "300px"}} src={myUrl} alt="fifa" />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col"><a  target="_blank" rel="noreferrer" href={newsUrl} className="stretched-link text-info">
                Continue reading
              </a>
            </div>
            <div className="col"><em className="text-muted">Author : {!author?"Unknown":author}</em></div>
          </div>
        </div>
        </div>
      </div>
    );
  }
export default NewsItem;
