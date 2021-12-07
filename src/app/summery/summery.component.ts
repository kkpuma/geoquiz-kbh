import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../interfaces';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnInit {
  @Input() distance: number;
  @Input() currentUserId: string;
  @Output() replay = new EventEmitter();
  @Input() scoreBoard$: Observable<Score[]>;

  constructor() { }

  ngOnInit() {
  }

  playAgain() {
    this.replay.emit();
  }

}
