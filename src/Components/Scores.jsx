import React, { Component } from "react";
import ScoreCard from "./ScoreCard";

export default class Scores extends Component {
 
  render() {
    return (
      <div className="container m-3">
        <div className="m-3">2022-12-05</div>
       
          
            <div>
              <ScoreCard
                group={"Group C"}
                team1={"Argentina"}
                team2={"Australia"}
                score1={2}
                score2={1}
                collapse="ex1"
                duration="FT"
                flag1={"https://countryflagsapi.com/png/032"}
                flag2={"https://countryflagsapi.com/png/036"}
                scorer = "Lionel Messi"
                time ={35}
              />
              <ScoreCard
                group={"Group F"}
                team1={"Portugal"}
                team2={"Switzerland"}
                score1={6}
                score2={1}
                collapse="ex2"
                duration="none"
                flag1={"https://countryflagsapi.com/png/620"}
                flag2={"https://countryflagsapi.com/png/756"}
                scorer = "Enzo Ferendez"
                time =  {77}
              />
            </div>
        
        
      </div>
    );
  }
}
