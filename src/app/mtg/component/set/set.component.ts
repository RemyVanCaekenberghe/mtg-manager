import { Component, OnInit } from '@angular/core';
import { Set } from '../../model/set';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  public displayedSet: Set;

  constructor() { }

  ngOnInit() {
  }

  public displaySelectedSet(set: Set): void {
    this.displayedSet = set;
  }
}
