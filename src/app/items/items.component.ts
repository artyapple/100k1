import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../shared/items.service';
import {ScoreService} from '../shared/score.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public itemsService: ItemsService, public scoreService: ScoreService) { }

  ngOnInit(): void {
    this.itemsService.getCurrentItem();
  }

  changeScore(team: number, id: number){
    this.itemsService.onToggleAnswer(id);
    if(!this.itemsService.getCurrentItem().completed) {
      const a = this.itemsService.getCurrentAnswer(id);
      if (a.completed) {
        this.scoreService.plusScore(team, a.points);
      } else {
        this.scoreService.minusScore(team, a.points);
      }
    }
  }
}
