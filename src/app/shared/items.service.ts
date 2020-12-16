import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Answer{
  id: number;
  answer: string;
  completed: boolean;
  points: number;
}

export interface Item{
  id: number;
  question: string;
  answers: Array<Answer>;
  completed: boolean;
}



@Injectable({providedIn: 'root'})
export class ItemsService {
  public currentItem: number = 0;

  public answers1: Answer[] = [
    {id:1, answer:"Lorem ipsum dolor", completed: false, points: 12},
    {id:2, answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam", completed: false, points: 11},
    {id:3, answer:"Lorem ipsum dolor sit amet", completed: false, points: 14}
  ];
  public answers2: Answer[] = [
    {id:1, answer:"2Lorem ipsum dolor", completed: false, points: 12},
    {id:2, answer:"2Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam", completed: false, points: 11},
    {id:3, answer:"2Lorem ipsum dolor sit amet", completed: false, points: 14}
  ];

  public allItems: Item[] = [
    {id:1, question: "This is the first question?", answers: this.answers1, completed: false},
    {id:2, question: "This is the second question?", answers: this.answers2, completed: false}
  ];

  //public item: Item;

  //sidebarVisibilityChange: Subject<Item> = new Subject<Item>();

  //constructor()  {
  //  this.sidebarVisibilityChange.subscribe((value) => {
  //    this.item = value;
  //  });
  //}


  //fetchItems(){
  //  this.item = this.allItems[this.currentItem];
  //}

  getCurrentItem(){
    return this.allItems[this.currentItem];
  }

  onToggleItem(id: number){
    const idx = this.allItems.findIndex(i => i.id === id);
    this.allItems[idx].completed = !this.allItems[idx].completed;
  }

  getCurrentAnswer(id: number){
    const idx = this.getCurrentItem().answers.findIndex(i => i.id === id);
    return this. getCurrentItem().answers[idx];
  }

  onToggleAnswer(id: number){
    const idx = this.getCurrentItem().answers.findIndex(i => i.id === id);
    this.getCurrentItem().answers[idx].completed = !this.getCurrentItem().answers[idx].completed;
  }

  nextQuestion(){
    if(this.currentItem+1<this.allItems.length){
      console.log(this.currentItem);
      this.currentItem++;
      console.log(this.currentItem);
    }

  }

  prevQuestion(){
    if(this.currentItem-1>=0) {
      console.log(this.currentItem);
      this.currentItem--;
      console.log(this.currentItem);
    }
  }
}
