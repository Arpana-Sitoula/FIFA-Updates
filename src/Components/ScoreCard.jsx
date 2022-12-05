import React, { Component } from 'react'

export default class ScoreCard extends Component {
  render() {
    var { group, team1,team2,score1,score2 }= this.props
    return (
      <div>
      
    <div className='row justify-content-between m-3 px-3 py-2 bg-dark rounded' data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
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
        
    </div>
   
    <div class="row justify-content-between px-3 py-2 collapse" id="collapseExample">
  <div class="card card-body text-dark">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>

      </div>
    )
  }
}
//Api Key
//'X-RapidAPI-Key': '258f47c644mshdae04381cf471bbp1077a9jsne307d2799cac',
//'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
