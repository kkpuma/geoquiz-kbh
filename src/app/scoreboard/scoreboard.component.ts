import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../interfaces';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() scoreBoard$: Observable<Score[]>;
  @Input() currentUserId: string;

  constructor() { }

  ngOnInit() {
  }

}
