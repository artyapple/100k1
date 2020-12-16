import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../shared/score.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  constructor(public scoreService: ScoreService) { }

  ngOnInit(): void {
  }

}
