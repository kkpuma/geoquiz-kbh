import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../interfaces';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    @Input() categories: { name: string, id: string, icon: string }[];
    @Input() questionsNum: number;
    @Input() scoreBoard$: Observable<Score[]>

    @Output() selectCategory = new EventEmitter();
    @Output() userName = new EventEmitter();

    name: string = '';


    constructor() { }

    ngOnInit() {
    }

    selected(id) {
        this.selectCategory.emit(id);
        this.userName.emit(this.name)
    }
}
