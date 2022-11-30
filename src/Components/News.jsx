import React, { Component } from "react";
import Heading from "./Heading";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "World Cup 2022: Inside the ‘secret club’ of Iranian anti-government football fans",
      description:
        "A group of Iranian football fans opposed to the regime are in Qatar to make their voices heard.",
      url: "http://www.bbc.co.uk/news/world-middle-east-63792286",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/10E51/production/_127810296_gettyimages-1444402956.jpg",
      publishedAt: "2022-11-29T13:37:23.44Z",
      content:
        "Many Iranians are boycotting the World Cup as they feel the team has not done enough to support the protest movement or criticise a regime which has killed hundreds of people. But a group of expat fa… [+4642 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Agence France-Presse",
      title:
        "Did Cristiano Ronaldo Head The Ball For Portugal's First Goal vs Uruguay? Watch Video - NDTV Sports",
      description:
        "Bruno Fernandes said he thought Cristiano Ronaldo had scored Portugal's opener in their 2-0 win over Uruguay on Monday even though he was credited with the goal.",
      url: "https://sports.ndtv.com/fifa-world-cup-2022/did-cristiano-ronaldo-head-the-ball-for-portugals-first-goal-vs-uruguay-watch-video-3561619",
      urlToImage:
        "https://c.ndtvimg.com/2022-11/k1l5q4a8_ronaldo_625x300_29_November_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-11-29T10:46:00Z",
      content:
        "Bruno Fernandes said he thought Cristiano Ronaldo had scored Portugal's opener in their 2-0 win over Uruguay on Monday even though he was credited with the goal. The Manchester United midfielder's cr… [+1848 chars]",
    },

    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "World Cup 2022: Scenarios, standings, tiebreakers as Brazil, Portugal qualify for last 16; 27 teams alive - CBS Sports",
      description:
        "France, Portugal and Brazil are already through, who will join them in the knockout stage of the tournament?",
      url: "https://www.cbssports.com/soccer/news/world-cup-2022-scenarios-standings-tiebreakers-as-brazil-portugal-qualify-for-last-16-27-teams-alive/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/11/29/565c934c-e390-4c43-9ad1-c78354e59350/thumbnail/1200x675/e8aefc11d9aaf725daf62f42d8f23611/gettyimages-1445285410.jpg",
      publishedAt: "2022-11-29T10:00:00Z",
      content:
        "We're reaching the business end of the World Cup group stage as some of the groups only have one match remaining. So far, France, Portugal, and Brazil are the only teams to book their passage to the … [+12065 chars]",
    },

    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Ryan Gaydos",
      title:
        "Colts' clock management comes under fire in loss to Steelers, sparks criticism toward Jeff Saturday - Fox News",
      description:
        "The Indianapolis Colts took the brunt of the criticism for clock management at the end of their loss to the Pittsburgh Steelers on Monday night.",
      url: "https://www.foxnews.com/sports/colts-clock-management-comes-under-fire-loss-steelers-sparks-criticism-toward-jeff-saturday",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/Jeff-Saturday7.jpg",
      publishedAt: "2022-11-29T04:38:23Z",
      content:
        "The Indianapolis Colts came under fire for the play-calling and decision-making at the end of their 24-17 loss to the Pittsburgh Steelers on Monday night.\r\nThe Colts had all three of their timeouts l… [+1948 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "NFL Week 12 grades: Steelers earn 'B' for Monday win over Colts; Tom Brady's Buccaneers get a 'D' for OT loss - CBS Sports",
      description:
        "Here are the Week 12 grades for every team that played Sunday and Monday",
      url: "https://www.cbssports.com/nfl/news/nfl-week-12-grades-steelers-earn-b-for-monday-win-over-colts-tom-bradys-buccaneers-get-a-d-for-ot-loss/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/11/29/4a5cd6c1-60ad-48d7-b7ab-e547e084322c/thumbnail/1200x675/c3c785f1a2409c47e804af31f7612a1a/steelesr.jpg",
      publishedAt: "2022-11-29T04:37:00Z",
      content:
        "After giving us three crazy games on Thanksgiving, the NFL might have topped itself on Sunday with several wild games that went down to the wire. \r\nIn Cleveland, Tom Brady suffered a loss for the fir… [+2845 chars]",
    },
    {
      source: {
        id: null,
        name: "KMBC Kansas City",
      },
      author: "KMBC 9 News Staff",
      title: "Patrick Mahomes announces birth of son - KMBC Kansas City",
      description: "Quarterback's tweet says his son was born Monday",
      url: "https://www.kmbc.com/article/patrick-mahomes-announces-birth-of-son-patrick-bronze-lavon-mahomes-iii/42091439",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/babymahomes-1669695072.jpg?crop=1.00xw:0.484xh;0,0&resize=1200:*",
      publishedAt: "2022-11-29T04:26:00Z",
      content:
        'KANSAS CITY, Mo. —Kansas City Chiefs quarterback Patrick Mahomes announced the birth of his son on Twitter Monday night.\r\nMahomes tweeted a picture with the name Patrick "Bronze" Lavon Mahomes III an… [+802 chars]',
    },
    {
      source: {
        id: null,
        name: "Houston Chronicle",
      },
      author: "Chandler Rome",
      title:
        "Houston Astros: José Abreu signs 3-year free-agent deal - Houston Chronicle ",
      description:
        "The former American League MVP will take the place of Yuli Gurriel, whose contract...",
      url: "https://www.houstonchronicle.com/texas-sports-nation/astros/article/Astros-Jose-Abreu-agree-to-contract-17616106.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/30/43/45/23214446/3/rawImage.jpg",
      publishedAt: "2022-11-29T03:11:15Z",
      content:
        "The Astros pounced on their top priority to address their most urgent offseason need.Houston signed free-agent first baseman José Abreu to a three-year contract Monday night, keeping the three-time A… [+3990 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: null,
      title:
        "Kyle Shanahan responds to Raheem Mostert's 49ers injury mismanagement claim - NBC Sports",
      description:
        "Kyle Shanahan responded to Raheem Mostert's claim that the 49ers attempted to pressure him out of having season-ending knee surgery last season.",
      url: "https://www.nbcsports.com/bayarea/49ers/kyle-shanahan-responds-raheem-mosterts-49ers-injury-mismanagement-claim",
      urlToImage:
        "https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Raheem-Mostert-Kyle-Shanahan-USA.jpg",
      publishedAt: "2022-11-29T02:46:36Z",
      content:
        "As if there wasnt enough drama heading into a star-studded clash between the 49ers and Miami Dolphins in Week 13 at Levis Stadium. \r\nSan Francisco will face off against a high-flying Miami team that … [+2051 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Ian O'Connor",
      title: "Giants need to seize this playoff opportunity - New York Post ",
      description:
        "They absolutely need make the playoffs for the first time since 2016, and nothing less should be considered acceptable.",
      url: "https://nypost.com/2022/11/28/giants-need-to-seize-this-playoff-opportunity/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/11/daniel-jones-giants-playoff.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2022-11-29T02:46:00Z",
      content:
        "Lets imagine that you, a passionate Giants fan, were wrapping up the Labor Day weekend in September when a normally reasonable friend predicted that your team would just miss the playoffs with a 9-8 … [+4947 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Jason Owens",
      title:
        "Deion Sanders says he has an offer to coach at Colorado: 'They're not the only ones' - Yahoo Sports",
      description:
        "Sanders is a hot name on the coaching carousel after his success at Jackson State.",
      url: "https://sports.yahoo.com/deion-sanders-says-he-has-an-offer-to-coach-at-colorado-theyre-not-the-only-ones-023848303.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/TfSVnKmbT6kERWyTPU2b1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-05/dbaef9c0-acf3-11eb-adb7-8353705c1c00",
      publishedAt: "2022-11-29T02:38:00Z",
      content:
        "Deion Sanders is a hot name on the coaching carousel after his success at Jackson State. (AP Photo/Rogelio V. Solis)\r\nDeion Sanders has a job offer.\r\nThe Jackson State football coach told reporters o… [+2320 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div>
        <div className="container row justify-content-center">
          <div className="col col-md-8">
            <Heading />
          </div>
        </div>
        <div className="row justify-content-md-center">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-8">
                <NewsItem
                  title={element.title.slice(0,82)}
                  desc={element.description.slice(0,125)}
                  myUrl={element.urlToImage}
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
