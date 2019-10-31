import { Set } from './../model/set';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SetService } from '../service/set.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {

  public sets$: Observable<Set[]>;

  constructor(private setService: SetService) { }

  ngOnInit() {
    this.sets$ = this.setService.getAll();
  }

}
