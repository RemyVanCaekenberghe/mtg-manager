import { Set } from './../model/set';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.css']
})
export class SetDetailComponent implements OnInit {

  @Input()
  public set: Set;

  constructor() { }

  ngOnInit() {

  }

}
