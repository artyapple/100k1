import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../shared/items.service';
import {ScoreService} from '../shared/score.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(public itemsService: ItemsService, public scoreService: ScoreService) { }

  public question: string;

  ngOnInit(): void {
  }

  next(){
    if(this.itemsService.getCurrentItem().completed) {
      this.scoreService.clearCurrentScore();
      this.itemsService.nextQuestion();
    }
  }

  prev(){
    //this.scoreService.clearCurrentScore();
    this.itemsService.prevQuestion();
  }

  roundFinished(id: number){
    this.itemsService.onToggleItem(id);
    console.log('round finished: ' + this.itemsService.getCurrentItem().completed);
    if(this.itemsService.getCurrentItem().completed){
      this.scoreService.pushRoundResult();
    } else {
      this.scoreService.pullRoundResult();
    }
  }
}
