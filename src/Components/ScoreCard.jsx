import React  from 'react'

const ScoreCard = (props) =>{

    var { group, team1,team2,score1,score2,collapse, duration,flag1,flag2,scorer,time}= props
    return (
      <div>
      
    <div className={'row justify-content-between m-3 px-3 py-2 bg-dark rounded'} data-bs-toggle="collapse" href={`#${collapse}`} role="button" aria-expanded="false" aria-controls={collapse}>
        <div className='col-2 p-1'>
          <div className='text-muted'>{group}</div>  
        </div>
        <div className='col-6'>
                <div className='d-flex justify-content-center'>
                <img className='p-1 crop'src={flag1} alt="flag"/>
                    <div className='p-1'>{team1.slice(0,3)}</div>
                    <div  className='p-1'>{score1}</div>
                    <div className='p-1'>.</div>
                    <div className='p-1'>{score2}</div>
                    <div className='p-1'>{team2.slice(0,3)}</div>
                <img className='p-1 crop' src={flag2} alt="flag"/>
                </div>
        </div>
       
        <div className='col-2 p-1 d-flex align-content-between cursor-pointer'>
            <div className='row '>
                <div className={`col btn btn-warning btn-sm d-${duration}`}>
                    {duration}
                </div>
                <div className='col downArrow '>
                &rsaquo;
                </div>
            </div>
        </div>
        
    </div>
   
    <div className="row justify-content-between px-3 py-2 collapse" id={collapse}>
  <div className="card card-body text-dark">
    <div className='row justify-content-between'>
      <div className='col-6'>
        <div className=' d-flex align-items-start justify-content-evenly'>
        <ul>
        <li>{scorer} {time}'</li>
        <li>{scorer} {time}'</li>
        </ul>
        </div>
      </div>
      <div className='col-6'>
        <div className=' d-flex align-items-end justify-content-evenly'>
        <ul>
          <li>
            {scorer} {time}'(OG)
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
export default ScoreCard;
