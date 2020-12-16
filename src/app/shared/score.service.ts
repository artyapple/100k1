import {Injectable} from '@angular/core';

export interface Score{
  firstTeam: number;
  secondTeam: number;
}

export interface CurrentScore{
  points: number;
  lastChange: number;
}

@Injectable({providedIn: 'root'})
export class ScoreService {

  public score: CurrentScore = { points: 0, lastChange: 0};

  public totalScore: Score = { firstTeam: 0, secondTeam: 0};

  plusScore(team: number, points: number){
    this.score.points += points;
    this.score.lastChange = team;
  }

  minusScore(team: number, points: number){
    this.score.points -= points;
    this.score.lastChange = team;
  }

  pushRoundResult(){
    if(this.score.lastChange==1){
      this.totalScore.firstTeam += this.score.points;
    } else if(this.score.lastChange==2) {
      this.totalScore.secondTeam += this.score.points;
    }
  }

  pullRoundResult(){
    if(this.score.lastChange==1){
      this.totalScore.firstTeam -= this.score.points;
    } else if(this.score.lastChange==2) {
      this.totalScore.secondTeam -= this.score.points;
    }
  }

  clearCurrentScore(){
    this.score.points = 0;
    this.score.lastChange = 0;
  }
}
