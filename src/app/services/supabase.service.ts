import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { createScore, Score } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  private _scoreBoard$ = new BehaviorSubject<Score[]>(null);
  scoreBoard$ = this._scoreBoard$.asObservable();

  private _liveScoreUpdate$ = new BehaviorSubject<Score>(null);
  liveScoreUpdate$ = this._liveScoreUpdate$.asObservable();


  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  fetchScoreboard(): Observable<Score[]> {
    return from(
      this.supabase
        .from<Score>('scoreboard')
        .select('*')
        .limit(10)
        .order('score', { ascending: true })
    ).pipe(
      map(response => response.data),
      tap(scores => this._scoreBoard$.next(scores))
    )
  }

  postScore(score: createScore) {
    return from(this.supabase
      .from<Score>('scoreboard')
      .insert(score)
    ).pipe(
      map(response => response.data)
    )
  }

  subscribeLiveScoreUpdate() {

    this.supabase
      .from<Score>('scoreboard')
      .on('INSERT', payload => {
        this._liveScoreUpdate$.next(payload.new);
      })
      .subscribe()
  }
}
