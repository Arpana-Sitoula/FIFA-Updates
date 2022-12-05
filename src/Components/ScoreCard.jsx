import React, { Component } from 'react'

export default class ScoreCard extends Component {
  render() {
    var { group, team1,team2,score1,score2 }= this.props
    return (
      <div>
        {/* Plan B: */}
         {/* <div className="accordion">
  <div className="accordion-item bg-dark text-light">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <span>Argentna     2  0     Australia</span>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       
      </div>
    </div>
  </div>
</div> */}

    {/* Plan A: */}
    <div className='row justify-content-between m-3 px-3 py-2 bg-dark rounded'>
        <div className='col-2 p-1'>
          <div className='text-disabled'>{group}</div>  
        </div>
        <div className='col-6'>
                <div className='d-flex justify-content-center'>
                    <div className='p-1'>{team1}</div>
                    <div  className='p-1'>{score1}</div>
                    <div className='p-1'>.</div>
                    <div className='p-1'>{score2}</div>
                    <div className='p-1'>{team2}</div>
                </div>
        </div>
        <div className='col-2 p-1 d-flex align-content-between cursor-pointer'>
            <div className='row '>
                <div className='col'>
                    FT
                </div>
                <div className='col downArrow '>
                &rsaquo;
                </div>
            </div>
        </div>
        <div id="collapseOne" className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       
      </div>
    </div>
    </div>


      </div>
    )
  }
}
//Api Key
//'X-RapidAPI-Key': '258f47c644mshdae04381cf471bbp1077a9jsne307d2799cac',
//'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
