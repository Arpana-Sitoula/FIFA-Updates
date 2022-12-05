import React, { Component } from 'react'
import ScoreCard from './ScoreCard'

export default class Scores extends Component {
  render() {
    return (
      <div className='container m-3'>
      <ScoreCard group={"Group C"} team1={"Argentina"} team2={"Australia"} score1={4} score2={0} />
      <ScoreCard group={"Group F"} team1={"Portugal"} team2={"Switzerland"} score1={2} score2={4}/>
      </div>
    )
  }
}
