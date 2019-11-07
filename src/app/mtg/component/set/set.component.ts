import { Component, OnInit } from '@angular/core';
import { Set } from '../../model/set';
import { SetService } from '../../service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  public displayedSet: Set;
  public sets$: Set[];

  constructor(private setService: SetService) { }

  ngOnInit() {
    this.setService.getAll().subscribe(
      sets => {
        this.sets$ = sets;
      }
    );
  }

  public displaySelectedSet(set: Set): void {
    this.displayedSet = set;
  }
}
